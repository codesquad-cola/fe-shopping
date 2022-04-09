const dev = false;
const apiURL = dev
  ? 'http://localhost:3000/api/autoComplete'
  : 'https://raw.githubusercontent.com/codesquad-cola/fe-shopping/main/server/db/autoComplete/autoComplete.json';

export const autoCompleteStore = {
  initialInputKeyword: '',

  async requestACKeywords(inputKeyword) {
    try {
      const response = await fetch(`${apiURL}`);

      if (!response.ok) {
        const bodyText = await response.text();
        throw new Error(
          `${response.status} ${response.statusText} ${bodyText}`
        );
      }

      const bodyJSON = await response.json();
      const parsedData = bodyJSON[inputKeyword] ?? {};

      const ACKeywords = Object.values(parsedData).map(
        ({ keyword }) => keyword
      );
      return ACKeywords;
    } catch (err) {
      console.error(err);
      return false;
    }
  },

  setInitialInputKeyword(keyword) {
    this.initialInputKeyword = keyword;
  },

  getInitialInputKeyword() {
    return this.initialInputKeyword;
  },
};
