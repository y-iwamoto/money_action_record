/* eslint-disable no-undef */
function loadStories() {
  require('../src/components/atoms/Button/PrimaryButton.stories');
  require('../src/components/atoms/Button/ProviderButton.stories');
  require('../src/components/atoms/Button/DeleteButton.stories');
  require('../src/components/atoms/Button/SmallButton.stories');

  require('../src/components/atoms/Figure/Triangle.stories');
  require('../src/components/atoms/Header/HeaderIcon.stories');
  require('../src/components/atoms/Header/HeaderTitle.stories');
  require('../src/components/atoms/Text/HeadingText.stories');
  require('../src/components/atoms/Text/TextHiro.stories');
  require('../src/components/atoms/Text/NoteText.stories');
  require('../src/components/atoms/Text/Link.stories');
  require('../src/components/atoms/Text/DateFromTo.stories');

  require('../src/components/atoms/Tab/Crumb.stories');
  require('../src/components/atoms/Form/Input.stories');
  require('../src/components/atoms/Form/Inputs.stories');

  require('../src/components/atoms/Chart/Line.stories');
  require('../src/components/atoms/Chart/Pie.stories');

  require('../src/components/molecules/Hiro.stories');
  require('../src/components/molecules/ProviderButtons.stories');
  require('../src/components/molecules/Breadcrumb.stories');
  require('../src/components/molecules/SearchForm.stories');
  require('../src/components/molecules/SmallButtons.stories');

  require('../src/components/organisms/ProviderSection.stories');
  require('../src/components/organisms/TransitionSection.stories');
  require('../src/components/organisms/BreadcrumbSection.stories');
  require('../src/components/organisms/FormSection.stories');
  require('../src/components/organisms/HouseholdAccountSection.stories');
  require('../src/components/organisms/ModalSection.stories');
  require('../src/components/organisms/SearchSection.stories');
  require('../src/components/organisms/ChartHouseholdAccountSection.stories');
  require('../src/components/organisms/PieChartSection.stories');

  require('../src/screens/LoginScreen.stories');
  require('../src/screens/SignUpScreen.stories');
  require('../src/screens/RegisterAccountItemScreen.stories');
}

const stories = [
  '../src/components/atoms/Button/PrimaryButton.stories',
  '../src/components/atoms/Button/ProviderButton.stories',
  '../src/components/atoms/Button/DeleteButton.stories',
  '../src/components/atoms/Button/SmallButton.stories',

  '../src/components/atoms/Figure/Triangle.stories',
  '../src/components/atoms/Header/HeaderIcon.stories',
  '../src/components/atoms/Header/HeaderTitle.stories',

  '../src/components/atoms/Text/HeadingText.stories',
  '../src/components/atoms/Text/TextHiro.stories',
  '../src/components/atoms/Text/NoteText.stories',
  '../src/components/atoms/Text/Link.stories',
  '../src/components/atoms/Text/DateFromTo.stories',

  '../src/components/atoms/Tab/Crumb.stories',
  '../src/components/atoms/Form/Input.stories',
  '../src/components/atoms/Form/Inputs.stories',

  '../src/components/atoms/Chart/Line.stories',
  '../src/components/atoms/Chart/Pie.stories',

  '../src/components/molecules/Hiro.stories',
  '../src/components/molecules/ProviderButtons.stories',
  '../src/components/molecules/Breadcrumb.stories',
  '../src/components/molecules/SearchForm.stories',
  '../src/components/molecules/SmallButtons.stories',

  '../src/components/organisms/ProviderSection.stories',
  '../src/components/organisms/TransitionSection.stories',
  '../src/components/organisms/BreadcrumbSection.stories',
  '../src/components/organisms/FormSection.stories',
  '../src/components/organisms/HouseholdAccountSection.stories',
  '../src/components/organisms/ModalSection.stories',
  '../src/components/organisms/SearchSection.stories',
  '../src/components/organisms/ChartHouseholdAccountSection.stories',
  '../src/components/organisms/PieChartSection.stories',

  '../src/screens/LoginScreen.stories',
  '../src/screens/SignUpScreen.stories',
  '../src/screens/RegisterAccountItemScreen.stories',
];

module.exports = {
  loadStories,
  stories,
};
