package weatherBit;

import context.Context;
import dto.DailyForecast;
import io.restassured.RestAssured;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import java.util.List;
import java.util.Map;

public class Weather {

    private Context context;


    public Weather(Context context) {
        this.context = context;
        RestAssured.baseURI = context.config().getProperty("weatherbitBaseURI");
    }

    //weather-forecast related methods
    public RequestSpecification weatherForecastByCity(Map<String,String> params) {

        params.put("key", context.config().getProperty("weatherbitAPIKey")); //Adding apiKey as parameter inorder to pass to rest assured

        return RestAssured.given().log().all().queryParams(params); //adding all parameters to rest assured and log request

    }

    public Response getForecast(RequestSpecification request) {

        return request.given().log().all().given().filter(new ResponseLoggingFilter()).when().get("forecast/daily"); //calling api request
    }

    public List<DailyForecast> getDailyForecastDetails(Response response) {

        return response.jsonPath().getList("data", DailyForecast.class);
    }


}
