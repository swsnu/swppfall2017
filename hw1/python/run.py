from crawler import JsonCrawler
import time


if __name__ == '__main__':
    # Reference https://www.metaweather.com/api/ for detailed information about api format
    locations = ['seoul', 'new york', 'cairo', 'tokyo', 'london']
    for location in locations:
        # Get 'Where On Earth' ID from location name
        JsonCrawler('https://www.metaweather.com/api/location/search/?query=%s' % location, location)

    # TODO: Acquire woeid from each crawler
    # and spawn new crawlers for 'https://www.metaweather.com/api/location/[:woeid]'
    # They should be consistently crawling data, so use active=True.

    print('=== Weather forecast ===')
    for location in locations:
        # Acquire weather data from crawlers
        data = JsonCrawler.get_by_name(location).get_data()
        weather = data['consolidated_weather'][0]
        print(location, weather['created'], weather['weather_state_name'])

    # You can stop a specific crawler
    JsonCrawler.get_by_name('seoul').kill()

    print('=== Weather forecast ===')
    for location in locations:
        # Since crawler for 'seoul' is killed, `get_by_name` will return None
        if JsonCrawler.get_by_name(location):
            data = JsonCrawler.get_by_name(location).get_data()
            weather = data['consolidated_weather'][0]
            print(location, weather['created'], weather['weather_state_name'])
