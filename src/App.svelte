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
    <defs id="defs2" />
    <rect
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill={hex}
    />

    <g id="layer1" transform="translate(80,35)">
      <circle
        style="fill:#000000;stroke-width:0.387475"
        id="path279"
        cx="-34.475555"
        cy="100.48277"
        r="170.40781"
      />
      <circle
        style="fill:#ffffff;stroke-width:0.387425"
        id="path716"
        cx="-33.75042"
        cy="102.80324"
        r="159.53072"
      />
      <circle
        style="fill:#000000;stroke-width:0.387475"
        id="path279-0"
        cx="317.92462"
        cy="100.7594"
        r="170.40781"
      />
      <circle
        style="fill:#ffffff;stroke-width:0.387425"
        id="path716-3"
        cx="318.64975"
        cy="103.07985"
        r="159.53072"
      />
      <circle
        style="fill:#000000;stroke-width:0.381931"
        id="path745"
        cx="-34.475555"
        cy="100.48277"
        r="101.51954"
      />
      <circle
        style="fill:#4d4d4d;stroke-width:0.383719"
        id="path803"
        cx="14.93971"
        cy="94.159081"
        r="33.430965"
      />
      <circle
        style="fill:#ececec;stroke-width:0.383719"
        id="path857"
        cx="37.649418"
        cy="113.50246"
        r="10.992165"
      />
    </g>
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
