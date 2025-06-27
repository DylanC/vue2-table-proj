<template>
  <div>
    <input
      type="text"
      name="searchInput"
      v-model="searchText"
      placeholder="Search"
      class="m-3" />
    <base-table
      id="employee-test"
      :search-text="searchText"
      :items="employeeData" />
  </div>
</template>

<script>
import axios from 'axios';
import BaseTable from '../components/ui/BaseTable';

export default {
  name: 'Home',
  components: {
    BaseTable
  },
  data() {
    return {
      searchText: '',
      employeeData: []
    };
  },
  methods: {
    async getEmployeeData () {
      return await axios.get('https://employeesapp.azurewebsites.net/api/GetEmployees');
    }
  },
  async created () {
    const res = await this.getEmployeeData();
    if(res && res.data && res.data.employees && res.data.employees.length > 0) {
      this.employeeData = res.data.employees;
    }
  }
};
</script>
