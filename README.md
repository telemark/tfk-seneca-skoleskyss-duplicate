# tfk-seneca-skoleskyss-duplicate
Handles duplicates for skoleskyss

```curl -d '{"role": "duplicate", "cmd":"set", "duplicateId": "1234", "data":"kjeks"}' -v http://localhost:8000/act```

```curl -d '{"role": "duplicate", "cmd":"check", "duplicateId": "1234"}' -v http://localhost:8000/act```

```curl -d '{"role": "duplicate", "cmd":"check", "duplicateId": "1234", "data":"kjeks"}' -v http://localhost:8000/act```