interface Test {
  color: string;
}

export const fn = ({ color }: Test): string => {
  return '' + color;
};
