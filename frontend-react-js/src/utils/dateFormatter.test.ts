// unit test for the format_time_created_at function
import { format_time_created_at } from './dateFormatter';

describe('format_time_created_at', () => {
  it('should return 1h when the difference is 1 hour', () => {
    const value = '2023-02-24 19:32:47 +0000';
    const result = format_time_created_at(value);
    expect(result).toEqual('1h');
  });
});

// unit test for the anotherDifference function
import { anotherDifference } from './dateFormatter';

describe('anotherDifference', () => {
  it('should return 1 when the difference is 1 hour', () => {
    const dateTime = '2023-02-24T21:13:23.684+01:00';
    const result = anotherDifference(dateTime);
    expect(result).toEqual(4);
  });
});
