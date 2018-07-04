import React from 'react';
import WriteTemplate from 'components/write/WriteTemplate';
import WritePanes from 'components/write/WritePanes';
import CodeEditorContainer from 'containers/write/CodeEditorContainer';
import WriteHeaderContainer from 'containers/write/WriteHeaderContainer';
import MarkdownPreviewContainer from 'containers/write/MarkdownPreviewContainer';
import SubmitBoxContainer from 'containers/write/SubmitBoxContainer';
import CategoryEditModal from 'components/write/CategoryEditModal';

const Write = () => {
  return (
    <WriteTemplate
      header={<WriteHeaderContainer />}
    >
      <SubmitBoxContainer />
      <WritePanes
        left={<CodeEditorContainer />}
        right={<MarkdownPreviewContainer />}
      />
      <CategoryEditModal />
    </WriteTemplate>
  );
};

export default Write;