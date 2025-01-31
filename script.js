async function getWeather(city) {
    const apiKey = '764b690bf8c66129275b19dbca34ca3a'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Erro: ${response.statusText}`);
      }

      const data = await response.json();

      console.log(`Clima em ${data.name}:`);
      console.log(`Temperatura: ${data.main.temp}°C`);
      console.log(`Descrição: ${data.weather[0].description}`);
      return data;
    } catch (error) {
      console.error('Erro ao obter informações climáticas:', error.message);
    }
  }

  getWeather('Ceará');
  