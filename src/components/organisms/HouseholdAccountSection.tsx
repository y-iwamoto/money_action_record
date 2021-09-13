import React, { useState } from 'react';
import dayjs from 'dayjs';

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
  const daysFlexArray = [...Array(itemsArray.length)].map(() => 1);
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
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row data={tableHead} flexArr={daysFlexArray} style={styles.head} textStyle={styles.text} />
        <ScrollView>
          <TableWrapper borderStyle={{ borderWidth: 1 }} style={styles.wrapper}>
            <Col
              data={tableTitle}
              style={styles.title}
              heightArr={daysHeightArray}
              textStyle={styles.text}
            />
            <Rows data={tableData} flexArr={[1, 1, 1]} style={styles.row} textStyle={styles.text} />
          </TableWrapper>
        </ScrollView>
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 0.75, backgroundColor: '#f6f8fa' },
  row: { height: 28 },
  text: { textAlign: 'center' },
});
