import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
  ext: {
    loadimpact: {
      // Project: Tests k6
      projectID: 3660733,
      // Test runs with the same name groups test runs together.
      name: 'Test (29/02/2024-18:46:01)'
    }
  }
};

export default function() {
  http.get('http://test.k6.io');
  sleep(1);
}