import { config } from 'dotenv';
config();

interface Constants {
  port: string;
  mysql: string;
}
const constants: Constants = {
  port: process.env.PORT,
  mysql: process.env.URl || "localhost",
};
(() => {
  const missingVars: string[] = [];

  Object.entries(constants).forEach(([key, value]) => {
    if (!value || value.toString().trim() === '') {
      missingVars.push(key);
    }
  });

  if (missingVars.length > 0) {
    console.error(`Missing environment variables: ${missingVars.join(', ')}`);
    throw new Error('Please provide proper environment variables');
  }
})();
export default constants;
