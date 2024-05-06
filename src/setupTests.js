class DOMParserMock {
  parseFromString() {
    return {
      body: {
        textContent: "",
      },
    };
  }
}

global.DOMParser = DOMParserMock;
