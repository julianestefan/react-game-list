import { render } from "@testing-library/react";
import Layout from "./index";

describe("layout", () => {
  it("should render the  footer, the navbar and the content inside a main tag", () => {
    const content = <h1>Hola</h1>;
    
    const{getByRole, getByText} =render(
      <Layout>
        {content}
      </Layout>
    );

    const main = getByRole("main");
    const navbar = getByRole("navigation");
    const footer = getByRole("footer");

    expect(main).toBeDefined();
    expect(main?.firstElementChild?.tagName).toBe('H1');
    expect(navbar).toBeDefined();
    expect(footer).toBeDefined();

  });
});
