<script>
  let hex = '#fff100';
  let svg;

  function handle() {
    var svgData = svg.outerHTML;
    var svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    var svgUrl = URL.createObjectURL(svgBlob);
    var downloadLink = document.createElement('a');
    downloadLink.href = svgUrl;
    downloadLink.download = 'plop.svg';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
</script>

<header>
  <label>
    Background color
    <input type="color" name="body" bind:value={hex} />
  </label>
</header>
<section>
  <svg
    bind:this={svg}
    viewBox="0 0 300 300"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:svg="http://www.w3.org/2000/svg"
  >
    <rect width="100%" height="100%" fill={hex} />
    <circle fill="#000" cx="398" cy="137" r="170" />
    <circle fill="#fff" cx="398" cy="137" r="160" />
    <circle fill="#000" cx="46" cy="137" r="170" />
    <circle fill="#fff" cx="46" cy="137" r="160" />
    <circle fill={hex} cx="59" cy="130" r="92" />
    <circle fill="#000" cx="75" cy="140" r="73" />
    <circle fill="#fff" cx="115" cy="162" r="21" />
  </svg>
</section>

<button on:click={handle}>Download</button>

<style>
  header {
    width: 400px;
    margin: 1rem auto;
  }

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    font-size: 1rem;
    font-weight: bold;
  }
  section {
    margin: 2rem auto 0;
    width: 400px;
    height: 400px;
    border: 8px solid black;
    border-radius: 8px;
    overflow: hidden;
  }

  button {
    display: block;
    margin: 2rem auto;
    border-radius: 8px;
    background: black;
    font-size: 1rem;
    border: none;
    padding: 1rem 2rem;
    color: white;
    cursor: pointer;
  }
</style>
