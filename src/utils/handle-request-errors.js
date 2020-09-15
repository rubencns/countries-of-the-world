export default ({ request: { status } }) => {
  if (status === 400) return { code: status, message: "Bad Request." };
  else if (status === 404) return { code: status, message: "Not Found." };
  else if (status >= 500) return { code: status, message: "Server Error." };
  else return {};
};
