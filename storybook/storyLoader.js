/* eslint-disable no-undef */
function loadStories() {
  require('../src/components/atoms/Button/PrimaryButton.stories');
  require('../src/components/atoms/Button/ProviderButton.stories');
  require('../src/components/atoms/Header/HeaderIcon.stories');
  require('../src/components/atoms/Header/HeaderTitle.stories');
  require('../src/components/atoms/Text/HeadingText.stories');
  require('../src/components/atoms/Text/TextHiro.stories');

  require('../src/components/molecules/Hiro.stories');
  require('../src/components/molecules/ProviderButtons.stories');
  require('../src/components/organisms/ProviderSection.stories');
  require('../src/components/organisms/TransitionSection.stories');

  require('../src/screens/LoginScreen.stories');
}

const stories = [
  '../src/components/atoms/Button/PrimaryButton.stories',
  '../src/components/atoms/Button/ProviderButton.stories',
  '../src/components/atoms/Header/HeaderIcon.stories',
  '../src/components/atoms/Header/HeaderTitle.stories',
  '../src/components/atoms/Text/HeadingText.stories',
  '../src/components/atoms/Text/TextHiro.stories',
  '../src/components/molecules/Hiro.stories',
  '../src/components/molecules/ProviderButtons.stories',
  '../src/components/organisms/ProviderSection.stories',
  '../src/components/organisms/TransitionSection.stories',
  '../src/screens/LoginScreen.stories',
];

module.exports = {
  loadStories,
  stories,
};
