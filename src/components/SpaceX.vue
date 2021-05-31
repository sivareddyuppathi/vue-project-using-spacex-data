<template>
  <div class="container">
    <div class="header">SpaceX Launch Programs</div>
    <div class="body">
      <div class="sidebar"></div>
      <div class="cards">
        <div v-for="(item, index) in spaceXData" :key="index" class="card">
          <img :src="item.mission_patch_small" alt="" />
          <div>
            <div class="card-content">
              <span class="title"
                >{{ item.mission_name }} #{{ item.flight_number }}</span
              >
            </div>
            <div class="card-content">
              <div>Mession Ids:</div>
              <ul>
                <li
                  v-for="(missionId, i) in item.mission_id"
                  :key="missionId + '-' + i"
                >
                  {{ missionId }}
                </li>
              </ul>
            </div>
            <div class="card-content">
              <span class="title">Launch Year:</span>
              <span>{{ item.launch_year }} </span>
            </div>
            <div class="card-content">
              <span class="title">Successfull Launch:</span>
              <span>{{ item.launch_success }}</span>
            </div>
            <div class="card-content">
              <span class="title">Successfull Landing:</span>
              <span class="title">{{ item.launch_success }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">.footer</div>
  </div>
</template>

<script>
// import store from "@/store/index.js";

export default {
  name: "SpaceX",

  data() {
    return {
      spaceXResponce: null,
      spaceXData: [],
    };
  },
  methods: {
    async fetchSpaceXData() {
      // alert();
      await this.$store.dispatch("getSpaceXData").then((resp) => {
        this.spaceXResponce = resp;
      });

      this.extractRequiredData();
    },

    extractRequiredData() {
      this.spaceXData = this.spaceXResponce.data.map((rocket) => {
        const {
          links: { mission_patch_small },
          mission_name,
          flight_number,
          mission_id,
          launch_year,
          launch_success,
        } = rocket;

        return {
          launch_success,
          mission_id,
          flight_number,
          mission_name,
          launch_year,
          mission_patch_small,
        };
      });
      console.log(this.spaceXData);
    },
  },
  created() {
    this.fetchSpaceXData();
  },
};
</script>

<style scoped>
@import "SpaceX.css";
</style>
