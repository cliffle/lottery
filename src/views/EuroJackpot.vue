<template>
  <h1 class="text-center">EuroJackpot</h1>
  <label v-if="loading">Loading...</label>
  <div v-else-if="result && result.response">
    <div
      class="text-center"
      v-for="(draw, id) in result.response.draws"
      :key="id"
    >
      <label class="text-margin-bottom"
        >Current numbers from {{ draw.date }}</label
      >
      <div class="number-container">
        <template
          class="lotto-numbers"
          v-for="(number, id) in draw.numbers"
          :key="id"
        >
          <LottoBall :number="number" />
        </template>
      </div>
      <div class="number-container">
        <template
          class="lotto-numbers"
          v-for="(number, id) in draw.additionalNumbers"
          :key="id"
        >
          <LottoBall :number="number" :isAdditionalNumber="true" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import LottoBall from "../components/LottoBall.vue";

const { result, loading } = useQuery(gql`
  query {
    response: draw(limit: 1, type: "eurojackpot") {
      backendError
      draws {
        additionalNumbers
        date
        numbers
      }
    }
  }
`);
</script>

<style scoped>
.text-margin-bottom {
  margin-bottom: 5px;
  display: inline-block;
}
.number-container {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
