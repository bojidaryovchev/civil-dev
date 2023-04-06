export const initParse = async () => {
  const { default: Parse } = await import('parse');

  Parse.initialize(process.env.PARSE_APP_ID, process.env.PARSE_JS_KEY);
  Parse.serverURL = 'https://parseapi.back4app.com/';

  return Parse;
};
