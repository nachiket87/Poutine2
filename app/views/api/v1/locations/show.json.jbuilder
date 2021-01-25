json.id @location
json.name @location.name

json.current do
  json.temp @location.recordings.last.temprature
  json.status @location.recordings.last.status
end
