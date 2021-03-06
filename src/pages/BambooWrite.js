import React from 'react';
import PageTemplate from 'components/Common/PageTemplate';
import BambooWriteContainer from 'containers/BambooWrite';

const BambooWrite = () => {
  return (
    <PageTemplate pageType={'bamboo'} url={'bamboo-write'}>
      <BambooWriteContainer />
    </PageTemplate>
  );
};

export default BambooWrite;
