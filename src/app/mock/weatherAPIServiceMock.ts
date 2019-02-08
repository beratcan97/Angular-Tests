import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Http, Response, HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})

export class WeatherComponentMock {
    "cod": "200";
    "message": 0.0031;
    "cnt": 40;
    "list": [
        {
            "dt": 1548957600,
            "main": {
                "temp": -3.38,
                "temp_min": -3.83,
                "temp_max": -3.38,
                "pressure": 1022.36,
                "sea_level": 1025.04,
                "grnd_level": 1022.36,
                "humidity": 82,
                "temp_kf": 0.46
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 44
            },
            "wind": {
                "speed": 2.86,
                "deg": 75.5027
            },
            "snow": {
                "3h": 0.0195
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-01-31 18:00:00"
        },
        {
            "dt": 1548968400,
            "main": {
                "temp": -2.77,
                "temp_min": -3.12,
                "temp_max": -2.77,
                "pressure": 1022.55,
                "sea_level": 1025.27,
                "grnd_level": 1022.55,
                "humidity": 84,
                "temp_kf": 0.35
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 76
            },
            "wind": {
                "speed": 3.07,
                "deg": 92.0017
            },
            "snow": {
                "3h": 0.017
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-01-31 21:00:00"
        },
        {
            "dt": 1548979200,
            "main": {
                "temp": -2.92,
                "temp_min": -3.15,
                "temp_max": -2.92,
                "pressure": 1022.18,
                "sea_level": 1024.94,
                "grnd_level": 1022.18,
                "humidity": 81,
                "temp_kf": 0.23
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 48
            },
            "wind": {
                "speed": 3.21,
                "deg": 88.5025
            },
            "snow": {
                "3h": 0.022
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-02-01 00:00:00"
        },
        {
            "dt": 1548990000,
            "main": {
                "temp": -2.29,
                "temp_min": -2.41,
                "temp_max": -2.29,
                "pressure": 1021.34,
                "sea_level": 1024.07,
                "grnd_level": 1021.34,
                "humidity": 86,
                "temp_kf": 0.12
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 80
            },
            "wind": {
                "speed": 3.56,
                "deg": 82.502
            },
            "snow": {
                "3h": 0.004
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-02-01 03:00:00"
        },
        {
            "dt": 1549000800,
            "main": {
                "temp": -1.57,
                "temp_min": -1.57,
                "temp_max": -1.57,
                "pressure": 1020.16,
                "sea_level": 1022.92,
                "grnd_level": 1020.16,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 4.42,
                "deg": 80.5086
            },
            "snow": {
                "3h": 0.117
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-02-01 06:00:00"
        },
        {
            "dt": 1549011600,
            "main": {
                "temp": -0.54,
                "temp_min": -0.54,
                "temp_max": -0.54,
                "pressure": 1018.69,
                "sea_level": 1021.46,
                "grnd_level": 1018.69,
                "humidity": 91,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13d"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 5.27,
                "deg": 79.0071
            },
            "snow": {
                "3h": 0.82125
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-02-01 09:00:00"
        },
        {
            "dt": 1549022400,
            "main": {
                "temp": -0.49,
                "temp_min": -0.49,
                "temp_max": -0.49,
                "pressure": 1017.09,
                "sea_level": 1019.86,
                "grnd_level": 1017.09,
                "humidity": 91,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 601,
                    "main": "Snow",
                    "description": "snow",
                    "icon": "13d"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 4.86,
                "deg": 92.5035
            },
            "snow": {
                "3h": 1.95125
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-02-01 12:00:00"
        },
        {
            "dt": 1549033200,
            "main": {
                "temp": 0.08,
                "temp_min": 0.08,
                "temp_max": 0.08,
                "pressure": 1015.77,
                "sea_level": 1018.52,
                "grnd_level": 1015.77,
                "humidity": 92,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13d"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 4.06,
                "deg": 93.5043
            },
            "snow": {
                "3h": 0.6075
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-02-01 15:00:00"
        },
        {
            "dt": 1549044000,
            "main": {
                "temp": 0.7,
                "temp_min": 0.7,
                "temp_max": 0.7,
                "pressure": 1015.54,
                "sea_level": 1018.29,
                "grnd_level": 1015.54,
                "humidity": 93,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 2.86,
                "deg": 101.501
            },
            "snow": {
                "3h": 0.5225
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-02-01 18:00:00"
        },
        {
            "dt": 1549054800,
            "main": {
                "temp": 0.54,
                "temp_min": 0.54,
                "temp_max": 0.54,
                "pressure": 1016.17,
                "sea_level": 1018.92,
                "grnd_level": 1016.17,
                "humidity": 95,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 80
            },
            "wind": {
                "speed": 1.97,
                "deg": 114.509
            },
            "snow": {
                "3h": 0.26
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-02-01 21:00:00"
        },
        {
            "dt": 1549065600,
            "main": {
                "temp": -0.39,
                "temp_min": -0.39,
                "temp_max": -0.39,
                "pressure": 1016.43,
                "sea_level": 1019.15,
                "grnd_level": 1016.43,
                "humidity": 93,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 80
            },
            "wind": {
                "speed": 1.66,
                "deg": 105.001
            },
            "snow": {
                "3h": 0.0475
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-02-02 00:00:00"
        },
        {
            "dt": 1549076400,
            "main": {
                "temp": -0.07,
                "temp_min": -0.07,
                "temp_max": -0.07,
                "pressure": 1016.8,
                "sea_level": 1019.49,
                "grnd_level": 1016.8,
                "humidity": 94,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 2.07,
                "deg": 96.0032
            },
            "snow": {
                "3h": 0.1325
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-02-02 03:00:00"
        },
        {
            "dt": 1549087200,
            "main": {
                "temp": 0.07,
                "temp_min": 0.07,
                "temp_max": 0.07,
                "pressure": 1017.13,
                "sea_level": 1019.84,
                "grnd_level": 1017.13,
                "humidity": 93,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 2.21,
                "deg": 85.0026
            },
            "snow": {
                "3h": 0.0725
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-02-02 06:00:00"
        },
        {
            "dt": 1549098000,
            "main": {
                "temp": 0.51,
                "temp_min": 0.51,
                "temp_max": 0.51,
                "pressure": 1017.69,
                "sea_level": 1020.45,
                "grnd_level": 1017.69,
                "humidity": 92,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13d"
                }
            ],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 2.52,
                "deg": 91.0032
            },
            "snow": {
                "3h": 0.0375
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-02-02 09:00:00"
        },
        {
            "dt": 1549108800,
            "main": {
                "temp": 1.1,
                "temp_min": 1.1,
                "temp_max": 1.1,
                "pressure": 1017.62,
                "sea_level": 1020.33,
                "grnd_level": 1017.62,
                "humidity": 91,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13d"
                }
            ],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 2.76,
                "deg": 86.5048
            },
            "snow": {
                "3h": 0.0475
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-02-02 12:00:00"
        },
        {
            "dt": 1549119600,
            "main": {
                "temp": 0.31,
                "temp_min": 0.31,
                "temp_max": 0.31,
                "pressure": 1017.76,
                "sea_level": 1020.46,
                "grnd_level": 1017.76,
                "humidity": 89,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13d"
                }
            ],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 3.21,
                "deg": 76.0008
            },
            "snow": {
                "3h": 0.08
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-02-02 15:00:00"
        },
        {
            "dt": 1549130400,
            "main": {
                "temp": -0.18,
                "temp_min": -0.18,
                "temp_max": -0.18,
                "pressure": 1017.47,
                "sea_level": 1020.27,
                "grnd_level": 1017.47,
                "humidity": 92,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 3.57,
                "deg": 66.0049
            },
            "snow": {
                "3h": 0.095
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-02-02 18:00:00"
        },
        {
            "dt": 1549141200,
            "main": {
                "temp": 0.5,
                "temp_min": 0.5,
                "temp_max": 0.5,
                "pressure": 1016.37,
                "sea_level": 1019.23,
                "grnd_level": 1016.37,
                "humidity": 92,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 4.26,
                "deg": 57.5047
            },
            "snow": {
                "3h": 0.22
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-02-02 21:00:00"
        },
        {
            "dt": 1549152000,
            "main": {
                "temp": 0.58,
                "temp_min": 0.58,
                "temp_max": 0.58,
                "pressure": 1015,
                "sea_level": 1017.73,
                "grnd_level": 1015,
                "humidity": 94,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 4.82,
                "deg": 52.0002
            },
            "snow": {
                "3h": 1.0175
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-02-03 00:00:00"
        },
        {
            "dt": 1549162800,
            "main": {
                "temp": 0.48,
                "temp_min": 0.48,
                "temp_max": 0.48,
                "pressure": 1013.44,
                "sea_level": 1016.16,
                "grnd_level": 1013.44,
                "humidity": 95,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 601,
                    "main": "Snow",
                    "description": "snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 4.99,
                "deg": 56.006
            },
            "snow": {
                "3h": 3.6275
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-02-03 03:00:00"
        },
        {
            "dt": 1549173600,
            "main": {
                "temp": 0.6,
                "temp_min": 0.6,
                "temp_max": 0.6,
                "pressure": 1011.88,
                "sea_level": 1014.63,
                "grnd_level": 1011.88,
                "humidity": 94,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 601,
                    "main": "Snow",
                    "description": "snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 5.32,
                "deg": 57.5027
            },
            "snow": {
                "3h": 3.23
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-02-03 06:00:00"
        },
        {
            "dt": 1549184400,
            "main": {
                "temp": 1,
                "temp_min": 1,
                "temp_max": 1,
                "pressure": 1011.07,
                "sea_level": 1013.81,
                "grnd_level": 1011.07,
                "humidity": 96,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 601,
                    "main": "Snow",
                    "description": "snow",
                    "icon": "13d"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 4.87,
                "deg": 56
            },
            "snow": {
                "3h": 1.5875
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-02-03 09:00:00"
        },
        {
            "dt": 1549195200,
            "main": {
                "temp": 1.14,
                "temp_min": 1.14,
                "temp_max": 1.14,
                "pressure": 1010.19,
                "sea_level": 1012.93,
                "grnd_level": 1010.19,
                "humidity": 94,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 3.94,
                "deg": 50.0007
            },
            "rain": {
                "3h": 0.01
            },
            "snow": {
                "3h": 2.1475
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-02-03 12:00:00"
        },
        {
            "dt": 1549206000,
            "main": {
                "temp": 1.02,
                "temp_min": 1.02,
                "temp_max": 1.02,
                "pressure": 1009.82,
                "sea_level": 1012.62,
                "grnd_level": 1009.82,
                "humidity": 96,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 3.54,
                "deg": 30.0009
            },
            "rain": {
                "3h": 0.28
            },
            "snow": {
                "3h": 2.3975
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-02-03 15:00:00"
        },
        {
            "dt": 1549216800,
            "main": {
                "temp": 0.94,
                "temp_min": 0.94,
                "temp_max": 0.94,
                "pressure": 1009.97,
                "sea_level": 1012.85,
                "grnd_level": 1009.97,
                "humidity": 94,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 3.62,
                "deg": 12.5016
            },
            "rain": {
                "3h": 0.21
            },
            "snow": {
                "3h": 1.3875
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-02-03 18:00:00"
        },
        {
            "dt": 1549227600,
            "main": {
                "temp": 0.6,
                "temp_min": 0.6,
                "temp_max": 0.6,
                "pressure": 1010.91,
                "sea_level": 1013.85,
                "grnd_level": 1010.91,
                "humidity": 96,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 3.67,
                "deg": 356.001
            },
            "rain": {
                "3h": 0.09
            },
            "snow": {
                "3h": 2.3325
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-02-03 21:00:00"
        },
        {
            "dt": 1549238400,
            "main": {
                "temp": 0.36,
                "temp_min": 0.36,
                "temp_max": 0.36,
                "pressure": 1013.41,
                "sea_level": 1016.25,
                "grnd_level": 1013.41,
                "humidity": 93,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 601,
                    "main": "Snow",
                    "description": "snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 4.37,
                "deg": 337.501
            },
            "rain": {},
            "snow": {
                "3h": 1.5575
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-02-04 00:00:00"
        },
        {
            "dt": 1549249200,
            "main": {
                "temp": -0.54,
                "temp_min": -0.54,
                "temp_max": -0.54,
                "pressure": 1016.53,
                "sea_level": 1019.36,
                "grnd_level": 1016.53,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 5.12,
                "deg": 327.002
            },
            "rain": {},
            "snow": {
                "3h": 0.5325
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-02-04 03:00:00"
        },
        {
            "dt": 1549260000,
            "main": {
                "temp": -2.07,
                "temp_min": -2.07,
                "temp_max": -2.07,
                "pressure": 1019.97,
                "sea_level": 1022.77,
                "grnd_level": 1019.97,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 4.97,
                "deg": 325
            },
            "rain": {},
            "snow": {
                "3h": 0.2225
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-02-04 06:00:00"
        },
        {
            "dt": 1549270800,
            "main": {
                "temp": -3.73,
                "temp_min": -3.73,
                "temp_max": -3.73,
                "pressure": 1023.02,
                "sea_level": 1025.74,
                "grnd_level": 1023.02,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13d"
                }
            ],
            "clouds": {
                "all": 64
            },
            "wind": {
                "speed": 4.66,
                "deg": 319.506
            },
            "rain": {},
            "snow": {
                "3h": 0.0975
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-02-04 09:00:00"
        },
        {
            "dt": 1549281600,
            "main": {
                "temp": -4.31,
                "temp_min": -4.31,
                "temp_max": -4.31,
                "pressure": 1025.21,
                "sea_level": 1027.93,
                "grnd_level": 1025.21,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 48
            },
            "wind": {
                "speed": 3.46,
                "deg": 317.501
            },
            "rain": {},
            "snow": {
                "3h": 0.0050000000000026
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-02-04 12:00:00"
        },
        {
            "dt": 1549292400,
            "main": {
                "temp": -5.57,
                "temp_min": -5.57,
                "temp_max": -5.57,
                "pressure": 1027.49,
                "sea_level": 1030.22,
                "grnd_level": 1027.49,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 44
            },
            "wind": {
                "speed": 2.87,
                "deg": 301.507
            },
            "rain": {},
            "snow": {
                "3h": 0.0275
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-02-04 15:00:00"
        },
        {
            "dt": 1549303200,
            "main": {
                "temp": -8.01,
                "temp_min": -8.01,
                "temp_max": -8.01,
                "pressure": 1028.66,
                "sea_level": 1031.57,
                "grnd_level": 1028.66,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 12
            },
            "wind": {
                "speed": 2.67,
                "deg": 298.504
            },
            "rain": {},
            "snow": {
                "3h": 0.017499999999998
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-02-04 18:00:00"
        },
        {
            "dt": 1549314000,
            "main": {
                "temp": -10.61,
                "temp_min": -10.61,
                "temp_max": -10.61,
                "pressure": 1030.03,
                "sea_level": 1032.87,
                "grnd_level": 1030.03,
                "humidity": 73,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.41,
                "deg": 292
            },
            "rain": {},
            "snow": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-02-04 21:00:00"
        },
        {
            "dt": 1549324800,
            "main": {
                "temp": -12.43,
                "temp_min": -12.43,
                "temp_max": -12.43,
                "pressure": 1031.79,
                "sea_level": 1034.6,
                "grnd_level": 1031.79,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.43,
                "deg": 282.504
            },
            "rain": {},
            "snow": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-02-05 00:00:00"
        },
        {
            "dt": 1549335600,
            "main": {
                "temp": -14.38,
                "temp_min": -14.38,
                "temp_max": -14.38,
                "pressure": 1032.29,
                "sea_level": 1035.13,
                "grnd_level": 1032.29,
                "humidity": 74,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.56,
                "deg": 271.5
            },
            "rain": {},
            "snow": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-02-05 03:00:00"
        },
        {
            "dt": 1549346400,
            "main": {
                "temp": -12.66,
                "temp_min": -12.66,
                "temp_max": -12.66,
                "pressure": 1032.95,
                "sea_level": 1035.7,
                "grnd_level": 1032.95,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 68
            },
            "wind": {
                "speed": 1.06,
                "deg": 259.502
            },
            "rain": {},
            "snow": {
                "3h": 0.039999999999999
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-02-05 06:00:00"
        },
        {
            "dt": 1549357200,
            "main": {
                "temp": -9.59,
                "temp_min": -9.59,
                "temp_max": -9.59,
                "pressure": 1033.59,
                "sea_level": 1036.37,
                "grnd_level": 1033.59,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13d"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 1.52,
                "deg": 34.5004
            },
            "rain": {},
            "snow": {
                "3h": 0.047500000000003
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-02-05 09:00:00"
        },
        {
            "dt": 1549368000,
            "main": {
                "temp": -7.54,
                "temp_min": -7.54,
                "temp_max": -7.54,
                "pressure": 1033.96,
                "sea_level": 1036.77,
                "grnd_level": 1033.96,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13d"
                }
            ],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 1.77,
                "deg": 36.0027
            },
            "rain": {},
            "snow": {
                "3h": 0.037499999999998
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-02-05 12:00:00"
        },
        {
            "dt": 1549378800,
            "main": {
                "temp": -7.1,
                "temp_min": -7.1,
                "temp_max": -7.1,
                "pressure": 1034.9,
                "sea_level": 1037.7,
                "grnd_level": 1034.9,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13d"
                }
            ],
            "clouds": {
                "all": 80
            },
            "wind": {
                "speed": 1.87,
                "deg": 27.5123
            },
            "rain": {},
            "snow": {
                "3h": 0.094999999999999
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-02-05 15:00:00"
        }
    ];
    "city": {
        "id": 2673730,
        "name": "Stockholm",
        "coord": {
            "lat": 59.3251,
            "lon": 18.0711
        },
        "country": "SE",
        "population": 1000000
    }
}