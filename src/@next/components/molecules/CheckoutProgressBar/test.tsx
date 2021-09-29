import "jest-styled-components";

import { mount } from "enzyme";
import React from "react";
import { IntlProvider } from "react-intl";

import { CheckoutProgressBar } from ".";

const steps = [
  {
    index: 0,
    link: "#",
    name: "Address",
  },
  {
    index: 1,
    link: "#",
    name: "Payment",
  },
  {
    index: 2,
    link: "#",
    name: "Completed",
  },
];

describe("<CheckoutProgressBar />", () => {
  it("exists", () => {
    const wrapper = mount(
      <IntlProvider locale="en">
        <CheckoutProgressBar steps={steps} activeStep={0} />
      </IntlProvider>
    );

    expect(wrapper.exists()).toEqual(true);
  });

  it("exists", () => {
    const wrapper = mount(
      <IntlProvider locale="en">
        <CheckoutProgressBar steps={steps} activeStep={0} />
      </IntlProvider>
    );

    expect(wrapper.find("a").length).toEqual(steps.length);
  });
});
