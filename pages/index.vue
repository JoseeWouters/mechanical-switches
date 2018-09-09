<template>
    <section class="container">
        <div class="grid">
            <div class="grid__header">
                <div>Switch</div>
                <div>Type</div>
                <div>Actuation force</div>
                <div>Actuation point</div>
            </div>
            <div class="grid__row" v-for="item in $store.state.switchesData.switches" v-bind:key="item.id">
                <div>{{item.name}}</div> 
                <div>{{item.type}}</div>
                <div>{{item.force}} g</div>
                <div>{{item.point}} mm</div>
            </div>
        </div>

        <div v-for="filter in $store.state.filterOptions.filters" v-bind:key="filter.id">
            <h2>{{filter.name}}</h2>
            <fieldset v-for="option in filter.options" v-bind:key="option.id">
                <label :for="option.value">
                    <input type="checkbox" :id="option.value" v-model="myFilters" :value="option.value">
                    {{option.name}}
                </label>
            </fieldset>
        </div>

    </section>
</template>

<script>

export default {
    data: () => {
        return {
            myFilters: [],
                    
        }
    },
    head () {
        return {
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
            ]
        } 
    }
}

</script>

<style lang="scss">
body {
    font-family: 'Roboto';
}
.container {
    max-width: 800px;
    margin: 0 auto;
}
fieldset {
    display: inline-block;
    border: 0;
}
.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border: 1px solid #ECECEB;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    * {
        padding: 1em;
    }
    &__header {
        display: contents;
        * {
            background: #A071D0;
            color: #ffffff;
        }
    }
    &__row {
        display: contents;
        &:nth-child(odd) * {
            background: #ECECEB;
        }
    }
}
</style>

