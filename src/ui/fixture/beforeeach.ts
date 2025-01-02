import ENV from "../../../environment/env";
import{test as mytest} from "./objects";
import Launch from "../pages/Launch";
import  json  from "../testdata/testdata.json";

export const test = mytest.extend <{beforeeachtest: Launch}> ({
  beforeeachtest: async ({page},use) => {
    const beforeeachtest= new Launch(page);
    beforeeachtest.launch(ENV.URL)
    await use(beforeeachtest);
  }

})