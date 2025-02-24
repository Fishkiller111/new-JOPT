const uiState = {
  header: 'mixed', /* available: mixed, droplist, mega, navscroll, hamburger, basic, search */
  footer: 'sitemap', /* available: basic, blog, contact, sitemap */
  corner: 'chat' /* available: chat, nav */,
  themeptions: true
};

export function reducer(state, action) {
  switch (action.type) {
    case 'set_header':
      return {
        ...state,
        header: action.payload
      };
    case 'set_footer':
      return {
        ...state,
        footer: action.payload
      };
    case 'set_corner':
      return {
        ...state,
        corner: action.payload
      };
    default:
      throw new Error();
  }
}

export default uiState;
