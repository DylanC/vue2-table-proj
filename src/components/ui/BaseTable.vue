<template>
	<div>
		<table
			v-if="items"
			class="table table-striped">
			<thead>
				<th class="">
					Employee Name
				</th>
				<th>
					Job Title
				</th>
				<th>
					Salary
				</th>
			</thead>
			<tbody>
				<tr
					v-for="item in filteredTableResults"
					:key="item.id">
					<td>{{ item.employee_name }}</td>
					<td>{{ item.job_title }}</td>
					<td>{{ item.salary }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	name: 'BaseTable',
	props: {
        id: {
            type: String,
            default: ''
        },
        items: {
            type: Array,
            default: () => []
        },
        searchText: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
        };
    },
    computed: {
    	filteredTableResults () {
    		return this.items.filter(item => item.employee_name.includes(this.searchText));
    	}
    }
};
</script>
