import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api.openweathermap.org/data/2.5";
const API_KEY = "c5abee630f5ea8f8adb58d736615faf7"
const createRequest = (url: any) => ({ url });

export const weatherAPI = createApi({
    reducerPath: "weatherAPI",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCurrentWeather: builder.query({
        query: (params) => createRequest(`/weather?q=${params.city}&appid=${API_KEY}`),
      }),
      getWeatherForecast: builder.query({
        query: (params) =>
          createRequest(
            `/forecast?q=${params.city}&appid=${API_KEY}`
          ),
      }),
    }),
   });
   export const { useGetCurrentWeatherQuery, useGetWeatherForecastQuery} = weatherAPI;
   