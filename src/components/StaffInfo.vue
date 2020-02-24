<template>
  <div class="focus">
    <router-link>
      <h2>{{employee.name}}</h2>
      <h3>{{employee.role}}</h3>
      <h4>{{employee.phone}}</h4>
      <h4>{{employee.email}}</h4>
      <button>Edit:</button>
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    employee() {
      console.log(this.$root.$data.employees);
      return this.$root.$data.employees.find(
        employee => employee.id == this.$route.params.id
      );
    }
  }
};
</script>

<style>
</style>