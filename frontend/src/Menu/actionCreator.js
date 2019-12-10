export const CHANGE_DISPLAYED_COMPONENT = 'changeDisplayedComponent';

export function changeDisplayedComponent(pageSelected) {
  return {
    type: CHANGE_DISPLAYED_COMPONENT,
    payload: pageSelected,
  };
}
