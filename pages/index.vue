<template>
    <section>
        <ul>
            <li v-for="item in filteredSwitches" v-bind:key="item.id">
                {{item.name}}
            </li>
        </ul>
        <h1>Type switch</h1>
        <label for="linear">
            Linear
            <input type="checkbox" id="linear" v-model="filterOptions" value="linear">
        </label>
        <label for="clicky">
            Clicky
            <input type="checkbox" id="clicky" v-model="filterOptions" value="clicky">
        </label>
        <label for="tactile">
            Tactile
            <input type="checkbox" id="tactile" v-model="filterOptions" value="tactile">
        </label>
    </section>
</template>

<script>

export default {
    data: () => {
        return {
            filterOptions: [],
            switches: [
                {
                    name: 'Cherry MX Red',
                    type: 'linear',
                    force: 45,
                    point: 2,
                },
                {
                    name: 'Cherry MX Brown',
                    type: 'tactile',
                    force: 45,
                    point: 2,
                },
                {
                    name: 'Cherry MX Blue',
                    type: 'clicky',
                    force: 60,
                    point: 2,
                }
            ]
        }
    },
    computed: {
        filteredSwitches() {
            if (!this.filterOptions.length) {
		  		return this.switches;
	  		} else {
				return this.switches.filter(item => {
		  			return this.filterOptions.includes(item.type);
				});
	  		} // else
        }
    }
}
</script>
