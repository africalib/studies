<template>
  <div class="card shadow-sm">
    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img"
         aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>
      Placeholder</title>
      <rect width="100%" height="100%" fill="#55595c"/>
      <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
    </svg>
    <div class="card-body">
      <p class="card-text">{{ item }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
          <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
        </div>
        <small class="text-muted">9 mins</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    item: String
  }
}
</script>

<style scoped>

</style>