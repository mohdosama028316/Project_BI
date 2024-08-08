const ctx = document.getElementById('myChart1').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['7 June','10 June', '13 June', '16 June', '19 June', '22 June', '25 June'],
                datasets: [{
                    label: 'Revenue in Thousand($)',
                    data: [30, 44, 58.5, 35, 45, 90,93],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: false, // Disable responsiveness
                maintainAspectRatio: false, 
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Revenue in Thousand($)',
                        font: {
                            size: 20
                        },
                        color: '#333', // Title color
                        padding: {
                            top: 10,
                            bottom: 30
                        },
                        align: 'center' // Position of the title
                    }
                },
            }
            
        });

const ctx6 = document.getElementById('myChart6').getContext('2d')
const myPieChart3 = new Chart(ctx6, {
    type: 'pie',
    data: {
        labels: ['Male(45.21%)','Femail(54.79%)'],
        datasets: [{
            label: 'Revenue By Gender',
            data: [45.21,54.79],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderColor: [
                'rgba(1,1,1, 1)',
                'rgba(1,1,1, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false, // Disable responsiveness
                maintainAspectRatio: false, 
                plugins: {
                    title: {
                        display: true,
                        text: 'Revenue By Gender',
                        font: {
                            size: 15
                        },
                        color: '#333', // Title color
                        padding: {
                            top: 10,
                            bottom: 30
                        },
                        align: 'center' // Position of the title
                    }
                },
    },
    },
);

const ctx3 = document.getElementById('myChart3').getContext('2d')
const myPieChart2 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['Credit Card(23%)', 'Cash(75)', 'Gift Card(3%)'],
        datasets: [{
            label: 'Paymnet In Percentage',
            data: [23, 75, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 205, 86, 1)',
            ],
            borderColor: [
                'rgba(1,1,1, 1)',
                'rgba(1,1,1, 1)',
                'rgba(1,1,1, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: false, // Disable responsiveness
                maintainAspectRatio: false, 
                plugins: {
                    title: {
                        display: true,
                        text: 'Paymnet Method In Percentage',
                        font: {
                            size: 20
                        },
                        color: '#333', // Title color
                        padding: {
                            top: 10,
                            bottom: 30
                        },
                        align: 'center' // Position of the title
                    }
                },
    }
});

const ctx4 = document.getElementById('myChart4').getContext('2d');
        const myChart4 = new Chart(ctx4, {
            type: 'bar',
            data: {
                labels: ['Anna Perez', 'Remy Monet', 'Jenna Silva', 'Tom Jackson', 'Walter Muller'],
                datasets: [{
                    label: 'Unit Sold',
                    data: [2506, 880, 811, 556, 121],
                    borderColor:[
                        

                    ],
                    backgroundColor: ['rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(175, 238, 238, 1)',
                'rgba(54, 162, 235, 1)'],
                    borderWidth: 2,
                    gridline:false,
                }]
            },
            options: {
                indexAxis: 'y',
                elements: {
                  bar: {
                    borderWidth: 2,
                  }
                },
                responsive: false,
                plugins: {
                  legend: {
                    position: 'right'
                  },
                  title: {
                    display: true,
                    text: 'Unit Sold By Sales Person (K)',
                    color: 'Balck',
                    font: {
                        size: 20
                    },
                    color: '#333',
                  }
                }
              }
            
});

const ctx5 = document.getElementById('myChart5').getContext('2d');
        const myChart5 = new Chart(ctx5, {
            type: 'bar',
            data: {
                labels: ['USA', 'Italy', 'Japan','Denmark', 'Estonia','UK','France'],
                datasets: [{
                    label: 'Revenue Generated By Country in Millions($)',
                    data: [29,  27, 22,4, 18,8,28],
                    borderColor: 'rgba(1,1,1,1)',
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 205, 86, 1)',
                        'rgba(175, 238, 238, 1)',
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 2,
                    gridline:false,
                }]
            },
            options: {
                responsive: false, // Disable responsiveness
                maintainAspectRatio: false, 
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Revenue Generated By Country in Millions($)',
                        font: {
                            size: 20
                        },
                        color: '#333', // Title color
                        padding: {
                            top: 10,
                            bottom: 30
                        },
                        align: 'center' // Position of the title
                    }
                },
            }
            
});



const ctx2 = document.getElementById('myChart2').getContext('2d')
const myPieChart = new Chart(ctx2, {
    type: 'polarArea',
    data: {
        labels: ['Anna Perez', 'Remy Monet', 'Jenna Silva', 'Tom Jackson', 'Walter Muller'],
        datasets: [{
            label: 'Revenue By Sales Person(%)',
            data: [48.25,21.65,14.68,12.37,3.04],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(175, 238, 238, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderColor: [
                'rgb(1,1,1)',
                    'rgb(1,1,1)',
                    'rgb(1,1,1)',
                    'rgb(1,1,1)',
                    'rgb(1,1,1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false, // Disable responsiveness
                maintainAspectRatio: false, 
                plugins: {
                    title: {
                        display: true,
                        text: 'Revenue By Sales Person(K)',
                        font: {
                            size: 20
                        },
                        color: '#333', // Title color
                        padding: {
                            top: 10,
                            bottom: 30
                        },
                        align: 'center' // Position of the title
                    }
                },
            }
    }
);


//TURF.JS

// Initialize the map
const map = L.map('map').setView([20, 0], 2); // World view

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Profit data for each country (in millions of dollars)
const profitData = {
    "USA": 0.29,
    "France": 0.28,
    "Italy": 0.27,
    "Japan": 0.22,
    "Estonia": 0.18,
    "UK": 0.08,
    "Denmark": 0.004
};

// Coordinates for each country (approximate)
const countryCoordinates = {
    "USA": [37.0902, -95.7129],
    "France": [46.6034, 1.8883],
    "Italy": [41.8719, 12.5674],
    "Japan": [36.2048, 138.2529],
    "Estonia": [58.5953, 25.0136],
    "UK": [55.3781, -3.4360],
    "Denmark": [56.2639, 9.5018]
};

//TURF.JS

// Colors for each country
const countryColors = {
    "USA": 'red',
    "France": 'Cyan',
    "Italy": 'Yellow',
    "Japan": 'lightcyan',
    "Estonia": 'blue',
    "UK": 'crimson',
    "Denmark": 'green'
};

// Add bubbles for each country
// for (const [country, profit] of Object.entries(profitData)) {
//     // Define the radius based on profit data
//     const radius = profit * 1800000; // Scale the profit value for visualization

//     // Create a circle (bubble) for each country
//     const circle = L.circle(countryCoordinates[country], {
//         color: countryColors[country],  // Set the circle outline color
//         fillColor: countryColors[country], // Set the circle fill color
//         fillOpacity: 0.6, // Set the fill opacity
//         radius: radius    // Set the radius scaled by profit
//     }).addTo(map);

//     // Bind a popup to each circle
//     circle.bindPopup(`<b>${country}</b><br>Revenue: $${(profit).toFixed(2)} Million`);
// }
let countryFilter = "All";

function applyFilter() {
    countryFilter = document.getElementById('countryFilter').value;
    updateCharts();
    updateMap();
}

function updateCharts() {
    // Update the chart data based on the selected country filter
    const filteredData = getFilteredData();
    myChart.data.datasets[0].data = filteredData.revenue;
    myChart.update();
    // const filteredData1 = getFilteredData();
    // myPieChart3.data.datasets[0].data = filteredData1.revenue;
    // myPieChart3.update();
    const filteredData2 = getFilteredData();
    myPieChart2.data.datasets[0].data = filteredData2.revenue;
    myPieChart2.update();
    const filteredData3 = getFilteredData();
    myChart4.data.datasets[0].data = filteredData3.revenue;
    myChart4.update();
    const filteredData4 = getFilteredData();
    // myChart5.data.datasets[0].data = filteredData4.revenue;
    // myChart5.update();
    const filteredData5 = getFilteredData();
    myPieChart.data.datasets[0].data = filteredData5.revenue;
    myPieChart.update();
    // Update other charts similarly
}


function getFilteredData() {
    if (countryFilter === "All") {
        return {
            revenue: [29, 28, 27, 22, 18,8,14]
        };
    }
    // Filter data based on the selected country
    // Example for USA
    if (countryFilter === "USA") {
        return {
            revenue: [29,  27, 22,4, 18,8,28]
        };
    }
    if (countryFilter === "France") {
        return {
            revenue: [4, 29, 18, 27, 8, 28, 22]
        };
    }
    if (countryFilter === "Italy") {
        return {
            revenue: [28, 18, 8, 4, 29, 22, 27]
        };
    }
    if (countryFilter === "Japan") {
        return {
            revenue: [27, 22, 4, 8, 28, 18, 29]
        };
    }
    if (countryFilter === "Estonia") {
        return {
            revenue: [ 8, 4, 29, 18, 27, 22, 28]
        };
    }
    if (countryFilter === "UK") {
        return {
            revenue: [18, 28, 22, 27, 4, 29, 8]
        };
    }
    if (countryFilter === "Denmark") {
        return {
            revenue: [60, 10, 80, 90, 10, 30, 50]
        };
    }
    // Add similar conditions for other countries
}

function updateMap() {
    // Clear existing layers
    map.eachLayer((layer) => {
        if (!!layer.toGeoJSON) {
            map.removeLayer(layer);
        }
    });
    // Add the base layer again
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    if (countryFilter === "All") {
        for (const [country, profit] of Object.entries(profitData)) {
            addCircleToMap(country, profit);
        }
    } else {
        addCircleToMap(countryFilter, profitData[countryFilter]);
        map.setView(countryCoordinates[countryFilter], 5);
    }
}

function addCircleToMap(country, profit) {
    const radius = profit * 1800000;
    const circle = L.circle(countryCoordinates[country], {
        color: countryColors[country],
        fillColor: countryColors[country],
        fillOpacity: 0.6,
        radius: radius
    }).addTo(map);
    circle.bindPopup(`<b>${country}</b><br>Revenue: $${(profit * 100).toFixed(2)} Million`);
}

applyFilter();