import { shallowMount } from "@vue/test-utils";
import Welcome from "@/components/Welcome.vue";

describe("Welcome.vue", () => {
  it("renders", () => {
    //GIVEN
    const expectedHeading = "Welcome to NorthLotto";

    //WHEN
    const wrapper = shallowMount(Welcome, {
      global: { stubs: ["router-link"] },
    });

    //THEN
    expect(wrapper.find("h1").text()).toMatch(expectedHeading);
  });

  it("should contain router link to eurojackpot", () => {
    //GIVEN
    const expectedUrlPath = "/eurojackpot";
    const routerMock = jest.fn();

    //WHEN
    const wrapper = shallowMount(Welcome, {
      stubs: ["router-link"],
      global: {
        mocks: {
          $router: routerMock,
        },
      },
    });

    //THEN
    expect(wrapper.find("router-link").attributes().to).toBe(expectedUrlPath);
  });
});
