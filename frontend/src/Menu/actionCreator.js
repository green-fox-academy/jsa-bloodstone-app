export const CHANGE_DIAPLAYED_COMPONENT = 'changeDisplayedComponent';

export function changeDisplayedComponent(pageSelected) {
  return {
    type: CHANGE_DIAPLAYED_COMPONENT,
    payload: pageSelected,
  };
}
