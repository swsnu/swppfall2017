from crawler import JsonCrawler


class WeatherForecast:
    # TODO: implement
    pass


if __name__ == '__main__':
    forecast = WeatherForecast(['seoul', 'new york'], [
        # TODO: set two conditions:
        # 1. 'Light cloud' : True if weather state contains light cloud
        # 2. 'Ice age' : True if minimum temperature is lower than -30 (degrees celsius)
    ])
    forecast.run()
