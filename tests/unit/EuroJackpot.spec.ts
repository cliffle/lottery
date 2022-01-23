import { shallowMount, flushPromises } from "@vue/test-utils";
import EuroJackpot from "../../src/views/EuroJackpot.vue";
import LottoBall from "../../src/components/LottoBall.vue";
import { useQuery } from "@vue/apollo-composable";

jest.mock("@vue/apollo-composable", () => ({
  useQuery: jest.fn(),
}));

describe("EuroJackpot.vue", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders loading text", async () => {
    //GIVEN
    (useQuery as jest.Mock).mockReturnValue({
      result: {},
      loading: true,
    });

    //WHEN
    const wrapper = shallowMount(EuroJackpot);
    await flushPromises();

    //THEN
    expect(wrapper.find("label").text()).toBe("Loading...");
  });

  it("renders lottery numbers", () => {
    //GIVEN
    const expectedDate = "Jan 21 2022";
    const expectedNumbers = ["4", "8", "15", "16", "23"];
    const expectedAdditionalNumbers = ["5", "10"];
    const expectedLottoBallNumbers = [
      ...expectedNumbers,
      ...expectedAdditionalNumbers,
    ];
    (useQuery as jest.Mock).mockReturnValue({
      result: {
        response: {
          draws: [
            {
              numbers: expectedNumbers,
              additionalNumbers: expectedAdditionalNumbers,
              date: expectedDate,
            },
          ],
        },
      },
      loading: false,
    });

    //WHEN
    const wrapper = shallowMount(EuroJackpot);

    //THEN
    const lottoBallComponents = wrapper.findAllComponents(LottoBall);

    expect(useQuery).toHaveBeenCalledTimes(1);
    expect(wrapper.find("label").text()).toBe(
      `Current numbers from ${expectedDate}`
    );
    expect(lottoBallComponents.length).toBe(expectedLottoBallNumbers.length);
    for (const [index, lottoBall] of lottoBallComponents.entries()) {
      expect(lottoBall.props().number).toBe(expectedLottoBallNumbers[index]);
    }
  });
});
