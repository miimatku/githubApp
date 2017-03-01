import { browser, element, by } from 'protractor';

export class GithubappPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('gitapp-root h1')).getText();
  }
}
