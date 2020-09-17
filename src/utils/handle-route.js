export default (history, param) => {
  if (param) history.replace(`/country/${param}`);
  else history.replace("/");
};
