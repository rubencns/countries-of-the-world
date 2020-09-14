export default (history, param) => {
  if (param) history.push(`/country/${param}`);
  else history.push("/");
};
