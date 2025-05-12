// 型定義ファイル
// 型定義ファイルは、TypeScriptの型定義を提供するファイルです。
declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    DIRECT_URL: string;
    NEXT_PUBLIC_SUPABASE_URL: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
    NODE_ENV: 'development' | 'production' | 'test';
  }
}
