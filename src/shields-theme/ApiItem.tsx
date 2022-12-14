import React from "react";

import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import { PageMetadata } from "@docusaurus/theme-common";
import type { Props } from "@theme/ApiItem";
import clsx from "clsx";

import styles from "docusaurus-theme-openapi/lib/theme/ApiItem/styles.module.css";

let ApiDemoPanel = (_: { item: any }) => <div style={{ marginTop: "3.5em" }} />;
if (ExecutionEnvironment.canUseDOM) {
  ApiDemoPanel = require("./ApiDemoPanel.tsx").default;
}

function ApiItem(props: Props): JSX.Element {
  const { content: ApiContent } = props;
  const { metadata, frontMatter } = ApiContent;
  const { image, keywords } = frontMatter;
  const { description, title, api, previous, next } = metadata;

  return (
    <>
      <PageMetadata {...{ title, description, keywords, image }} />

      <div className="row">
        <div className="col">
          <div className={styles.apiItemContainer}>
            <article>
              <div className={clsx("theme-api-markdown", "markdown")}>
                <ApiContent />
              </div>
            </article>

          </div>
        </div>
        <div className={clsx("col", api ? "col--5" : "col--3")}>
          {api && <ApiDemoPanel item={api} />}
        </div>
      </div>
    </>
  );
}

export default ApiItem;
