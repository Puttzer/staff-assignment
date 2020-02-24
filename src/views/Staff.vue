<template>
  <div class="staff-list-wrapper">
    <div class="staff-list">
      <router-link
        v-for="employee in employees"
        class="employee"
        v-bind:to="'/staff/'+employee.id"
        v-bind:key="employee.id"
      >
        <p>{{employee.name}}</p>
      </router-link>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Staff",
  computed: {
    employees() {
      return this.$root.$data.employees;
    }
  }
};
</script>
