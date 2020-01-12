<template>
    <nav class="toolbox horizontal-filter">
        <div class="toolbox-left">
            <div class="filter-toggle">
                <span>Filters:</span>
                <a href=#>&nbsp;</a>
            </div>
        </div><!-- End .toolbox-left -->

        <div class="toolbox-item toolbox-sort">
            <label>Sort By:</label>

            <div class="select-custom">
                <select name="orderby" class="form-control">
                    <option value="menu_order" selected="selected">Default sorting</option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="rating">Sort by average rating</option>
                    <option value="date">Sort by newness</option>
                    <option value="price">Sort by price: low to high</option>
                    <option value="price-desc">Sort by price: high to low</option>
                </select>
            </div><!-- End .select-custom -->

            <a href="#" class="sorter-btn" title="Set Ascending Direction"><span class="sr-only">Set Ascending Direction</span></a>
        </div><!-- End .toolbox-item -->
    </nav>
</template>

<script>
    
export default {
  name: 'FilterTool'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
