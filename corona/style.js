const coronaData = () => {
    fetch("https://data.covid19india.org/v4/min/data.min.json")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.current);
        console.log(data);
        console.log(data.AN.delta);
        console.log(data.AN.delta7);
  
        document.getElementById("tested").innerHTML = data.AN.delta.tested;
        document.getElementById("vac1").innerHTML = data.AN.delta.vaccinated1;
        document.getElementById("vac2").innerHTML = data.AN.delta.vaccinated2;
        document.getElementById("cnfrm").innerHTML = data.AN.delta7.confirmed;
        document.getElementById("recvr").innerHTML = data.AN.delta7.recovered;
        document.getElementById("test").innerHTML = data.AN.delta7.tested;
      });
  };