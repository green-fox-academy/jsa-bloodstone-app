export const SWITCH_MENU = 'switchMenu';

export function switchMenu(pageSelected) {
  return {
    type: SWITCH_MENU,
    payload: pageSelected,
  };
}
