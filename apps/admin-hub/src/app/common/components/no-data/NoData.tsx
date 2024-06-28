import FlexBox from '@admin-hub/common/styles/components/FlexBox';
import React from 'react';

const NoData = () => {
  return (
    <FlexBox alignitems='center' justifycontent='center' style={{minHeight: 500}}>
      <h4>Sorry! No Data Available.</h4>
    </FlexBox>
  );
};

export default NoData;
