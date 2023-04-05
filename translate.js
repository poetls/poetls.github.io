// developed by GRP team 17
// translate.js
document.addEventListener('DOMContentLoaded', function() {
  const chineseSelector = document.getElementById('lang');
  const englishSelector = document.getElementById('lang1');

  function translatePageTo(lang) {
    if (lang === 'en') {
      document.querySelector('.中文').style.display = 'none';
      document.querySelector('.english').style.display = 'block';
    } else if (lang === 'zh-CN') {
      document.querySelector('.english').style.display = 'none';
      document.querySelector('.中文').style.display = 'block';
    }
    syncLanguageSelectors(lang);

  }

  function handleLanguageChange(event) {
    const selectedLanguage = event.target.value;
    if (selectedLanguage === 'en') {
      translatePageTo('en');
    } else if (selectedLanguage === 'zh-CN') {
      translatePageTo('zh-CN');
    }
  }

  function syncLanguageSelectors(lang) {
    chineseSelector.value = lang;
    englishSelector.value = lang;
  }

  chineseSelector.addEventListener('change', handleLanguageChange);
  englishSelector.addEventListener('change', handleLanguageChange);
});