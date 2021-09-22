import React, { useState } from 'react';
import dayjs from 'dayjs';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { Expense } from '../../types/expense';
import { Item } from '../../types/item';

type Props = {
  onPressButton: (expense: Expense) => void;
  items: Item[];
  expenses: Array<Expense[]>;
  todayDiff: number;
};
export const HouseholdAccountSection: React.FC<Props> = ({
  onPressButton,
  items,
  expenses,
  todayDiff,
}: Props) => {
  const elementButton = (expense: Expense) => {
    return (
      <TouchableOpacity onPress={() => onPressButton(expense)}>
        <Text>{expense.amount}</Text>
      </TouchableOpacity>
    );
  };

  const itemsArray = items && items.length !== 0 ? items.map((item) => item['name']) : [];
  itemsArray.unshift('');
  let width = 0;
  switch (itemsArray.length) {
  case 1:
    width = wp('50%');
    break;
  case 2:
    width = wp('45%');
    break;
  case 3:
    width = wp('30%');
    break;
  case 4:
    width = wp('22%');
    break;
  default:
    width = wp('20%');
    break;
  }
  const itemsWidthArray = [...Array(itemsArray.length)].map(() => width);
  const valuesWidthArray = [...Array(itemsArray.length - 1)].map(() => width);
  const [tableHead] = useState(itemsArray);

  const daysArray = [...Array(7)].map((_, i) => {
    if (todayDiff > -1) {
      return dayjs()
        .subtract(i - todayDiff, 'days')
        .format('MM/DD');
    } else {
      return dayjs()
        .add(i + todayDiff, 'days')
        .format('MM/DD');
    }
  });
  const daysHeightArray = [...Array(daysArray.length)].map(() => 28);
  const [tableTitle] = useState(daysArray);

  const expensesArray =
    expenses && expenses.length !== 0
      ? expenses.map((expenseOneday) => expenseOneday.map((expense) => elementButton(expense)))
      : [];
  const [tableData] = useState(expensesArray);

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row
            data={tableHead}
            widthArr={itemsWidthArray}
            style={styles.head}
            textStyle={styles.text}
          />
          <ScrollView>
            <TableWrapper borderStyle={{ borderWidth: 1 }} style={styles.wrapper}>
              <Col
                data={tableTitle}
                style={styles.title}
                heightArr={daysHeightArray}
                textStyle={styles.text}
                width={width}
              />
              <Rows
                data={tableData}
                widthArr={valuesWidthArray}
                style={styles.row}
                textStyle={styles.text}
              />
            </TableWrapper>
          </ScrollView>
        </Table>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  wrapper: { flexDirection: 'row' },
  title: { backgroundColor: '#f6f8fa' },
  row: { height: 28 },
  text: { textAlign: 'center' },
});
