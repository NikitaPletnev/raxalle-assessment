import { processTemplate } from "./templateProcessor";

describe("templateProcessor", () => {
  it("should return the template with the variables substituted", async () => {
    expect(processTemplate("{}", {})).toEqual("{}");
  });
});
