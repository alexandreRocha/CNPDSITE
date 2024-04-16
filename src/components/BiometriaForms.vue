<template>
  <section id="bio" class="bio">
    <div class="container">
      <div id="biob" class="section-bredcumbs">
        <h5>
          Onde estou?
          <router-link style="text-decoration: none" to="/">
            <b>Página Inicial</b>
          </router-link>
          <b> > </b>
          <router-link style="text-decoration: none" to="/formularios">
            <b>Formulários</b>
          </router-link>
          <b> > </b>
          <router-link style="text-decoration: none" to="/formsbio">
            <b>Formulário de Biometria</b>
          </router-link>
        </h5>
      </div>
      <Form @submit="onSubmit"  method="POST" enctype="multipart/form-data">
        <div class="section-title">
          <h2>
            Notificação de tratamento de dados biométricos de trabalhadores
          </h2>
        </div>
        <!-- FORMS GERAL-->
        <div class="col-md-12"></div>
        <div class="col-md-12" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-2">
                <label id="labelleft" for="TipoNot" class="form-label"
                  >Tipo Notificação</label
                >
              </div>
              <div class="col-md-10">
                <Field
                 
                  name="tipoNotificacao"
                  as="select"
                  class="form-select"
                  v-model="tipo_notificacao"
                  :rules="validateRadio"
                >
                  <option value="">- selecione o tipo de Notificação -</option>
                  <option
                    v-for="tipoNotificacao in tipoNotificacoes"
                    :key="tipoNotificacao.value"
                    :value="tipoNotificacao.value"
                  >
                    {{ tipoNotificacao.value }}
                  </option>
                </Field>
                <ErrorMessage class="errorMessage" name="tipoNotificacao" />
              </div>
            </div>
          </div>
        </div>
          
        <div class="col-md-12" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="separacao">
                1. Responsável pelo Tratamento
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col-md-4"></div>
              <div class="col-md-2">
                <Field
                  :rules="validateRadio"
                  type="radio"
                  id="tipoPessoa"
                  name="tipoPessoa"
                  value="Pessoa Singular"
                  v-model="tipo_pessoa"
                />
                <label for="Pessoa Singular"> Pessoa Singular</label>
              </div>
              <div class="col-md-2">
                <Field
                  :rules="validateRadio"
                  type="radio"
                  id="tipoPessoa"
                  name="tipoPessoa"
                  value="Pessoa Coletiva"
                  v-model="tipo_pessoa"
                />
                <label for="Pessoa Coletiva"> Pessoa Coletiva</label>
              </div>
              <div class="col-md-4"></div>
              <div class="col-md-12" id="alignCenter">
                <ErrorMessage class="errorMessage" name="tipoPessoa" />
              </div>

              <div class="col-md-12">
                <Field
                  v-model="nome_denominacao"
                  name="nomedenominacao"
                  type="text"
                  class="form-control"
                  id="nomedenominacao"
                  placeholder=" Nome/Denominação"
                  :rules="validateText"
                />
                <ErrorMessage class="errorMessage" name="nomedenominacao" />
              </div>

              <div class="col-md-12">
                <input
                  type="text"
                  class="form-control"
                  id="nomecomercial"
                  placeholder=" Nome/Comercial"
                  name="nomecomercial"
                  v-model="nome_comercial"
                />
              </div>
              <div class="col">
                <!--
              <Field
                  as="select"
                  name="atividadeDesenvolvida"
                  v-model="atividade_desenvolvida"
                  class="form-select"
                  aria-label="Default select example"
                  :rules="validateRadio"
                >
                  <option value="">- Escolha a actividade desenvolvida-</option>
                  <option v-for="atividade in atividades"  :key="atividade.value"
                    :value="atividade.value">
                    {{ atividade.value }}
                  </option>
                </Field>
                <ErrorMessage
                  class="errorMessage"
                  name="atividadeDesenvolvida"
                />
                -->
               
                <Field
                  name="atividadeDesenvolvida"
                  as="select"
                  class="form-select"
                  v-model="atividadeDesenvolvida"
                  :rules="validateRadio"
                >
                  <option value="">selecione a atividade desenvolvida</option>
                  <option
                    v-for="atividadeDesenvolvida in atividadesDesenvolvidas"
                    :key="atividadeDesenvolvida.value"
                    :value="atividadeDesenvolvida.value"
                  >
                    {{ atividadeDesenvolvida.value }}
                  </option>
                </Field>
                <ErrorMessage
                  class="errorMessage"
                  name="atividadeDesenvolvida"
                />
             
              </div>
              <div class="col">
                <Field
                  name="nif"
                  type="number"
                  class="form-control"
                  id="nif"
                  alt="NIF"
                  placeholder="Número de NIF"
                  :rules="validateNumber"
                  v-model="numero_nif"
                />
                <ErrorMessage class="errorMessage" name="nif" />
              </div>
              <div class="col-md-12">
                <div class="row">
                  <div class="col">
                    <input
                      name="rua"
                      type="text"
                      class="form-control"
                      id="rua"
                      alt="RUA"
                      placeholder="Entre o nome da Rua"
                      v-model="rua_responsavel_tratamento"
                    />
                  </div>
                  <div class="col">
                    <Field
                      name="local"
                      type="text"
                      class="form-control"
                      id="local"
                      alt="Local"
                      placeholder="Cidade/Vila/Lugar/Zona"
                      :rules="validateText"
                      v-model="local_responsavel_tratamento"
                    />
                    <ErrorMessage class="errorMessage" name="local" />
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="row">
                  <div class="col">
                    <Field
                      as="select"
                      class="form-select"
                      v-model="ilhaResp"
                      name="ilhaResp"
                      id="ilhaResp"
                      for="ilhaResp"
                      placeholder="- Seleciona uma ilha-"
                      :rules="validateRadio"
                     
                    >
                      <option value="">- selecione uma ilha -</option>
                      <option
                        v-for="option in ilhas"
                        :key="option.value"
                        :value="option.value"
                      >
                        {{ option.label }}
                      </option>
                    </Field>
                    <ErrorMessage class="errorMessage" name="ilhaResp" />
                  </div>
                  <div class="col">
                    <Field
                      as="select"
                      class="form-select"
                      v-model="concelhoResp"
                      name="concelhoResp"
                      id="concelhoResp"
                      for="concelhoResp"
                      placeholder="- Seleciona um concelho -"
                      :rules="validateRadio"
                    >
                      <option value="">- selecione um concelho -</option>
                      <option
                        v-for="option in concelhos[ilhaResp]"
                        :key="option.value"
                        :value="option.value"
                      >
                        {{ option.label }}
                      </option>
                    </Field>
                    <ErrorMessage class="errorMessage" name="concelhoResp" />
                  </div>
                </div>
              </div>
              <div class="col-md-12" id="divloco">
                <div class="row">
                  <div class="col">
                    <input
                      name="caixapostal"
                      type="text"
                      class="form-control"
                      id="caixapostal"
                      alt="Caixa Postal"
                      placeholder="Entre o número da Caixa Postal"
                      v-model="caixapostal_responsavel_tratamento"
                    />
                  </div>
                  <div class="col">
                    <Field
                      name="telefone"
                      type="number"
                      class="form-control"
                      id="telefone"
                      alt="Telefone/Telemovel"
                      placeholder="Contato: Telefone/Telemovel"
                      :rules="validateNumber"
                      v-model="telefone_responsavel_tratamento"
                    />
                    <ErrorMessage class="errorMessage" name="telefone" />
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="row">
                  <div class="col">
                    <Field
                      name="email"
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Entre o seu email: example@cnpd.cv"
                      :rules="validateEmail"
                      v-model="email_responsavel_tratamento"
                    />
                    <ErrorMessage class="errorMessage" name="email" />
                  </div>
                  <div class="col">
                    <div class="col">
                      <Field
                        :rules="validateRadio"
                        type="radio"
                        id="paisResp"
                        name="paisResp"
                        value="Cabo Verde"
                        v-model="paisResp"
                      />
                      <label for="Pessoa Singular"> Cabo Verde</label>
                    </div>
                    <div class="col">
                      <Field
                        :rules="validateRadio"
                        type="radio"
                        id="paisResp"
                        name="paisResp"
                        value=" Fora do Território Nacional"
                        v-model="paisResp"
                      />
                      <label for=" Fora do Território Nacional">
                        Fora do Território Nacional</label
                      >
                    </div>
                    <ErrorMessage class="errorMessage" name="paisResp" />
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <Field
                  name="nomedenominacaoRepre"
                  type="text"
                  class="form-control"
                  id="nomedenominacao"
                  alt="Nome Denominação: Refere-se à designação oficial de uma instituição pública ou privada"
                  placeholder=" Representante"
                  :rules="validateText"
                  v-model="nome_representante_tratamento"
                />
                <ErrorMessage
                  class="errorMessage"
                  name="nomedenominacaoRepre"
                />
              </div>
              <div class="col">
                <input
                  name="ruaRepre"
                  type="text"
                  class="form-control"
                  id="rua"
                  placeholder=" Rua"
                  v-model="rua_representante_tratamento"
                />
              </div>
              <div class="col">
                <input
                  name="caixapostalRepre"
                  type="text"
                  class="form-control"
                  id="caixapostalRepre"
                  placeholder=" Caixa Postal"
                  v-model="caixapostal_representante_tratamento"
                />
              </div>
              <div class="col-md-12">
                <Field
                  name="cidadeRepre"
                  type="text"
                  class="form-control"
                  id="cidadeRepre"
                  placeholder=" Cidade/Vila/Lugar/Zona"
                  :rules="validateText"
                  v-model="local_representante_tratamento"
                />
                <ErrorMessage class="errorMessage" name="cidadeRepre" />
              </div>
              <div class="col-md-12">
                <div class="row">
                  <div class="col">
                    <Field
                      as="select"
                      class="form-select"
                      v-model="ilhaMorRep"
                      name="ilhaMorRep"
                      id="ilhaMorRep"
                      for=" ilhaMorRep"
                      placeholder="- Seleciona uma ilha-"
                      :rules="validateRadio"
                    >
                      <option value="">- selecione uma ilha -</option>
                      <option
                        v-for="option in ilhas"
                        :key="option.value"
                        :value="option.value"
                      >
                        {{ option.label }}
                      </option>
                    </Field>
                    <ErrorMessage class="errorMessage" name="ilhaMorRep" />
                  </div>
                  <div class="col">
                    <Field
                      as="select"
                      class="form-select"
                      v-model="concelhoMorRep"
                      name="concelhoMorRep"
                      id="concelhoMorRep"
                      for="concelhoMorRep"
                      placeholder="- Seleciona um concelho -"
                      :rules="validateRadio"
                    >
                      <option value="">- selecione um concelho -</option>
                      <option
                        v-for="option in concelhos[ilhaMorRep]"
                        :key="option.value"
                        :value="option.value"
                      >
                        {{ option.label }}
                      </option>
                    </Field>
                    <ErrorMessage class="errorMessage" name="concelhoMorRep" />
                  </div>
                </div>
              </div>
              <div class="col-md-12" id="divloco">
                <Field
                  name="nomePessoaContato"
                  type="text"
                  class="form-control"
                  id="nomecomercial"
                  placeholder=" Nome da pessoa do contato"
                  :rules="validateText"
                  v-model="nome_pessoa_contato"
                />
                <ErrorMessage class="errorMessage" name="nomePessoaContato" />
              </div>
              <div class="col-md-12">
                <div class="row">
                  <div class="col">
                    <Field
                      name="emailPessoadoContato"
                      type="email"
                      class="form-control"
                      id="nomePessoaContato"
                      alt="nomePessoaContato"
                      placeholder="Entre o seu email: example@cnpd.cv"
                      :rules="validateEmail"
                      v-model="email_representante_tratamento"
                    />
                    <ErrorMessage
                      class="errorMessage"
                      name="emailPessoadoContato"
                    />
                  </div>
                  <div class="col">
                    <Field
                      name="telefonePessoadoContato"
                      type="number"
                      class="form-control"
                      id="telefone"
                      alt="Telefone/Telemovel"
                      placeholder="Contato: Telefone/Telemovel"
                      :rules="validateNumber"
                      v-model="telefone_representante_tratamento"
                    />
                    <ErrorMessage
                      class="errorMessage"
                      name="telefonePessoadoContato"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="separacao">
                Processamento da informação
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col">
                <label class="form-check-label">
                  Existe um Serviço Externo encarregado do processamento ?
                </label>
                <buttom
                  @click="changeServico"
                  type="button"
                  class="btn btn-outline-primary"
                  name="morada"
                  id="moradasimbotton"
                >
                  {{ checkServico ? "Não" : "Sim" }}
                </buttom>
              </div>
              <div class="col-md-12" v-if="checkServico">
                <div class="col-md-12">
                  <Field
                    type="text"
                    class="form-control"
                    name="entidadeProcessInfo"
                    id="entidadeProcessInfo"
                    placeholder=" Qual a Entidade Encarregue pelo processamento dos dados"
                    :rules="validateText"
                    v-model="entidade_processamento_informacao"
                  />
                  <ErrorMessage
                    class="errorMessage"
                    name="entidadeProcessInfo"
                  />
                </div>
                <div class="col-md-12">
                  <input
                    type="text"
                    class="form-control"
                    name="ruaProcessInfo"
                    id="ruaProcessInfo"
                    placeholder=" Rua"
                    v-model="rua_entidade_processamento"
                  />
                </div>
                <div class="col-md-12">
                  <input
                    type="text"
                    class="form-control"
                    name="caixaPostalProcessInfo"
                    id="caixaPostalProcessInfo"
                    placeholder=" Caixa Postal"
                    v-model="caixapostal_entidade_processamento"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    type="text"
                    class="form-control"
                    name="lugarProcessInfo"
                    id="lugarProcessInfo"
                    placeholder="Cidade/Vila/Lugar/Zona da Entidade"
                    :rules="validateText"
                    v-model="local_entidade_processamento"
                  />
                  <ErrorMessage class="errorMessage" name="lugarProcessInfo" />
                </div>

                <div class="col-md-12">
                  <div class="row">
                    <div class="col">
                      <Field
                        as="select"
                        class="form-select"
                        v-model="ilhaServExt"
                        name="ilhaServExt"
                        id="ilhaServExt"
                        for="ilhaServExt"
                        placeholder="- Seleciona uma ilha-"
                        :rules="validateRadio"

                      >
                        <option value="">- selecione uma ilha -</option>
                        <option
                          v-for="ilha in ilhas"
                          :key="ilha.value"
                          :value="ilha.value"
                        >
                          {{ ilha.value }}
                        </option>
                      </Field>
                      <ErrorMessage class="errorMessage" name="ilhaServExt" />
                    </div>
                    <div class="col">
                      <Field
                        as="select"
                        class="form-select"
                        v-model="concelhoServExt"
                        name="concelhoServExt"
                        id="concelhoServExt"
                        for="concelhoServExt"
                        placeholder="- Seleciona um concelho -"
                        :rules="validateRadio"
                      >
                        <option value="">- selecione um concelho -</option>
                        <option
                          v-for="concelho in concelhos[ilhaServExt]"
                          :key="concelho.value"
                          :value="concelho.value"
                        >
                          {{ concelho.value }}
                        </option>
                      </Field>
                      <ErrorMessage
                        class="errorMessage"
                        name="concelhoServExt"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--------------------------------------FINALIDADE DO TRATAMENTO----------------------------------------------------->

        <div class="col-md-12" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="divloco">
                <div class="col-md-12" id="separacao">
                  2. Finalidade do tratamento
                </div>
              </div>

              <div class="col-md-12"><br /></div>
              <div class="col">
                <label class="form-check-label">
                  (caso seja tratamento de assiduidade e controlo de acesso,
                  deverá selecionar as duas opções)
                </label>
                <treeselect
                  :multiple="true"
                  :options="finalidadeTratamentos"
                  placeholder="-Indique a(s) finalidade(s) do tratamento-"
                  v-model="finalidadeTratamento"
                />
                
                <!--<pre class="language-json"><code>{{dadosRegistrado}}</code></pre>-->
              </div>

              <div class="col">
                <label class="form-check-label"> Número de funcionarios </label>
                <input
                  type="number"
                  class="form-control"
                  id="numeroFuncionarios"
                  alt="numero de funcionario"
                  placeholder="indique o número de funcionários que aderiram ao sistema"
                  v-model="numero_funcionarios"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-12" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="divloco">
                <div class="col-md-12" id="separacao">
                  3. Dados pessoais contidos em cada registo
                </div>
              </div>

              <div class="col-md-12"><br /></div>
              <div class="col">
                <label class="form-check-label"> Dados registrados </label>

                <treeselect
                  :rules="validateText"
                  :multiple="true"
                  :options="dadosRegistrados"
                  placeholder="-Dados Pessoais contidos em cada registro -"
                  v-model="dadosRegistrado"
                  name="xpto"
                />
                <ErrorMessage
                  class="errorMessage"
                  name="xpto"
                />
                <!--<pre class="language-json"><code>{{dadosRegistrado}}</code></pre>-->
              </div>

              <div class="col">
                <label class="form-check-label"> Outros dados </label>
                <treeselect
                  :multiple="true"
                  :options="outrosDados"
                  placeholder="-Outros Dados Tratados -"
                  v-model="outrosDado"
                  
                />
                <!--<pre class="language-json"><code>{{dadosRegistrado}}</code></pre>-->
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="divloco">
                <div class="col-md-12" id="separacao">
                  4. Forma de armazenamento do dado biométrico
                </div>
              </div>

              <div class="col-md-12"><br /></div>
              <label class="form-check-label"> Forma de registro </label>
              <div class="col">
                <treeselect
                  :multiple="true"
                  :options="formasRegistros"
                  placeholder="-Forma de registos dos dados -"
                  v-model="formasRegistro"
                />
                <!--<pre class="language-json"><code>{{dadosRegistrado}}</code></pre>-->
              </div>
              <div class="col-md-12"><br /></div>
            </div>
          </div>
        </div>

        <div class="col-md-12" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="divloco">
                <div class="col-md-12" id="separacao">
                  5. Tratamento da informação
                </div>
              </div>
              <div class="col-md-12"><br /></div>
              <label class="form-check-label">
                Forma de tratamento da informação
              </label>
              <div class="col">
                <treeselect
                  :multiple="false"
                  :options="tratamentoInfos"
                  placeholder="-De que forma a informação é tratada -"
                  v-model="tratamentoInfo"
                />
              </div>
              <div class="col-md-12"><br /></div>
            </div>
          </div>
        </div>

        <div class="col-md-12" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="divloco">
                <div class="col-md-12" id="separacao">
                  6. Exercício do direito de Acesso
                </div>
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col">
                <label class="form-check-label">
                  Morada do local do exercício do direito de acesso é a mesma
                  indicada em 1 ?
                </label>
                <buttom
                  @click="changeDireitoAcesso"
                  type="button"
                  class="btn btn-outline-primary"
                  name="morada"
                  id="moradasimbotton"
                >
                  {{ checkDireitoAcesso ? "Sim" : "Não" }}
                </buttom>
              </div>
              <div class="col-md-12" v-if="checkDireitoAcesso">
                <div class="col-md-12">
                  <input
                    type="text"
                    class="form-control"
                    name="ruaDireitoAcesso"
                    id="ruaDireitoAcesso"
                    placeholder=" Rua"
                    v-model="rua_direito_acesso"
                  />
                </div>
                <div class="col-md-12">
                  <input
                    type="text"
                    class="form-control"
                    name="caixaPostalDireitoAcesso"
                    id="caixaPostalDireitoAcesso"
                    placeholder=" Caixa Postal"
                    v-model="caixapostal_direito_acesso"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    type="text"
                    class="form-control"
                    name="localDireitoAcesso"
                    id="localDireitoAcesso"
                    placeholder=" Local - Cidade/Vila/Lugar/Zona"
                    :rules="validateText"
                    v-model="local_direito_acesso"
                  />
                  <ErrorMessage
                    class="errorMessage"
                    name="localDireitoAcesso"
                  />
                </div>

                <div class="col-md-12">
                  <div class="row">
                    <div class="col">
                      <Field
                        as="select"
                        class="form-select"
                        v-model="ilhaDirAcess"
                        name="ilhaDirAcess"
                        id=" ilhaDirAcess"
                        for=" ilhaDirAcess"
                        placeholder="- Seleciona uma ilha-"
                        :rules="validateRadio"
                      >
                        <option value="">- selecione uma ilha -</option>
                        <option
                          v-for="option in ilhas"
                          :key="option.value"
                          :value="option.value"
                        >
                          {{ option.label }}
                        </option>
                      </Field>
                      <ErrorMessage class="errorMessage" name="ilhaDirAcess" />
                    </div>
                    <div class="col">
                      <Field
                        as="select"
                        class="form-select"
                        v-model="concelhoDirAcess"
                        name="concelhoDirAcess"
                        id="concelhoDirAcess"
                        for="concelhoDirAcess"
                        placeholder="- Seleciona um concelho -"
                        :rules="validateRadio"
                      >
                        <option value="">- selecione um concelho -</option>
                        <option
                          v-for="option in concelhos[ilhaDirAcess]"
                          :key="option.value"
                          :value="option.value"
                        >
                          {{ option.label }}
                        </option>
                      </Field>
                      <ErrorMessage
                        class="errorMessage"
                        name="concelhoDirAcess"
                      />
                    </div>
                    <div class="col-md-12"><br /></div>

                    <div class="col-md-12">
                      <div class="row">
                        <div class="col">
                          <Field
                            type="email"
                            class="form-control"
                            name="emailDireitoAcesso"
                            id="emailDireitoAcesso"
                            placeholder="Entre o email da pessoa de contato: example@cnpd.cv"
                            :rules="validateEmail"
                            v-model="email_direito_acesso"
                          />
                          <ErrorMessage
                            class="errorMessage"
                            name="emailDireitoAcesso"
                          />
                        </div>
                        <div class="col">
                          <Field
                            type="number"
                            class="form-control"
                            name="telefoneDireitoAcesso"
                            id="telefoneDireitoAcesso"
                            placeholder="Contato: Telefone/Telemovel"
                            :rules="validateNumber"
                            v-model="telefone_direito_acesso"
                          />
                          <ErrorMessage
                            class="errorMessage"
                            name="telefoneDireitoAcesso"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-12" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="separacao">
                De que forma é exercido o direito de acesso?
              </div>
              <div class="col-md-4"></div>
              <div class="col-md-2" id="alignCenter">
                <Field
                  :rules="validateRadio"
                  type="checkbox"
                  id="formaDireitoAcesso"
                  name="formaDireitoAcesso"
                  value="Presencial"
                  v-model="formaDireitoAcesso"
                />
                <label for="formaDireitoAcesso"> Presencial</label>
              </div>
              <div class="col-md-2" id="alignCenter">
                <Field
                  :rules="validateRadio"
                  type="checkbox"
                  id="formaDireitoAcesso"
                  name="formaDireitoAcesso"
                  value="Escrita"
                  v-model="formaDireitoAcesso"
                />
                <label for="formaDireitoAcesso"> Escrita</label>
              </div>
              <div class="col-md-4"></div>
              <div class="col-md-12" id="alignCenter">
                <ErrorMessage class="errorMessage" name="formaDireitoAcesso" />
              </div>

              <div class="col-md-12">
                <Field
                  name="outraFormaDireitoAcesso"
                  as="textarea"
                  class="form-control"
                  v-model="outrasformas_direito_acesso"
                  placeholder=" Mencionar outras formas de direito de acesso, caso não for mencionado acima"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-12" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="divloco">
                <div class="col-md-12" id="separacao">
                  7. Medidas de segurança a implementar
                </div>
              </div>

              <div class="col-md-12">
                <label
                  id="labelleft"
                  class="form-check-label"
                  for="formaDireitoAcesso"
                >
                  Especifique as medidas físicas de segurança do sistema:
                </label>
                <Field
                  as="textarea"
                  class="form-control"
                  name="outraFormaDireitoAcessoFisica"
                  id="outraFormaDireitoAcesso"
                  v-model="medidade_seguranca_fisica"
                  :rules="validateText"
                  placeholder="Ocorre quando temos barreiras físicas que impeçam que pessoas não autorizadas tenham acesso a espaços onde os dados estão guardados"
                />
                <ErrorMessage
                  class="errorMessage"
                  name="outraFormaDireitoAcessoFisica"
                />
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col-md-12">
                <label
                  id="labelleft"
                  class="form-check-label"
                  for="formaDireitoAcesso"
                >
                  Especifique as medidas lógica de segurança do sistema:
                </label>
                <Field
                  as="textarea"
                  class="form-control"
                  name="outraFormaDireitoAcessoLogica"
                  id="outraFormaDireitoAcesso"
                  v-model="medidas_seguranca_logica"
                  :rules="validateText"
                  placeholder="Consiste na implementação de chaves de acesso, encriptação do conteúdo e registos de operações efectuadas no sistema"
                />
                <ErrorMessage
                  class="errorMessage"
                  name="outraFormaDireitoAcessoLogica"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-12" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="divloco">
                <div class="col-md-12" id="separacao">
                  8. Representante dos trabalhadores
                </div>
              </div>
              <div class="col-md-12"><br /></div>
              <div class="row">
                <div class="col">
                  <div class="col">
                    <label class="form-check-label">
                      Existe representante dos trabalhadores?
                    </label>
                    <buttom
                      @click="changeRepTrab"
                      type="button"
                      class="btn btn-outline-primary"
                      name="morada"
                      id="moradasimbotton"
                    >
                      {{ checkRepTrab ? "Não" : "Sim" }}
                    </buttom>
                  </div>
                  <div class="col-md-12"><br /></div>
                  <div class="col-md-12" v-if="checkRepTrab">
                    <label for="formFile" class="form-label"
                      >Se sim, juntar a cópia do parecer ou comprovativo do
                      pedido.</label
                    >
                    <input @change="getImg" name="parecer_representante_trabalhadores" type="file" accept="application/pdf" />
                             


                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
        <div class="col-md-12" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="divloco">
                <div class="col-md-12" id="separacao">
                  9. Catálogo do equipamento
                </div>
              </div>
              <div class="col-md-12"><br /></div>
              <div class="row">
                <div class="col">
                  <div class="col">
                    <label class="form-check-label">
                      Existe o catalágo do equipamento?
                    </label>
                    <buttom
                      @click="Changecatalago"
                      type="button"
                      class="btn btn-outline-primary"
                      name="morada"
                      id="moradasimbotton"
                    >
                      {{ checkCatalogo ? "Não" : "Sim" }}
                    </buttom>
                  </div>
                  <div class="col-md-12"><br /></div>
                  <div class="col-md-12" v-if="checkCatalogo">
                    <label for="formFile" class="form-label"
                      >Se sim, anexa aqui o catálago do equipamentp.</label
                    >
                    <input @change="getcatalago"  type="file" accept="application/pdf"/>
                             


                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
        <div class="col-md-12"><br /></div>
        
        

        <div class="col-12" id="divsave">
          <button
            @click="submitForm"
            id="buttonsave"
            class="btn btn-primary"
            type="submit"
          >
            <IconAwe class="icon-color" icon="paper-plane" /> Submeter Dados
          </button>
        </div>


        <!------------------MODAL SHOW ------------------------->
        <div v-show="showModal" class="modal-mask">
              <div class="modal-wrapper">
                <div class="modal-container">
                  <h5 class="modal-title" >
                  Atenção:
                  </h5>
                  <hr> 
                  <div class="modal-header" id="headermodal">
                     <img id="img" src="/img/success1.gif" class="center">
                  </div>
                  <p id="success">O seu formulário foi submetido com Sucesso.</p>   
                  <div class="modalFooter">
                    <button
                        @click="closeSuccess"
                        id="buttonsave"
                        class="btn btn-primary" 
                      >
                        <IconAwe class="icon-color" icon="circle-check" /> Fechar
                    </button>
                  </div>
                </div>
              </div>
              
            </div>

            <div v-show="ErrorModal" class="modal-mask">
              <div class="modal-wrapper">
                <div class="modal-container">
                  <h5 class="modal-title" >
                  Atenção:
                  </h5>
                  <hr> 
                  <div class="modal-header" id="headermodal">
                     <img id="img" src="/img/error-img.gif" class="center">
                  </div>
                  <p id="error">O seu formulário não foi submetido.</p>
                  <p id="error1">Por favor tente novamente!</p>        
                  <div class="modalFooter">
                   <button
                        @click="closeError"
                        id="buttonsave"
                        class="btn btn-primary"
                      >
                        <IconAwe class="icon-color" icon="circle-check" /> Fechar
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
      </Form>
    </div>
  </section>
</template>

<script>
//import Multiselect from "@vueform/multiselect";

import { Form, Field, ErrorMessage } from "vee-validate";

import { API_ENDPOINT } from "../main.js";
// import the component
import Treeselect from "vue3-treeselect";
// import the styles

import "vue3-treeselect/dist/vue3-treeselect.css";

import axios from "axios";
export default {
  components: {
  
    // Multiselect,
    Treeselect,
    Form,
    Field,
    ErrorMessage,
  },
  name: "BiometriaForms",

  data() {
    return {
      msg:null,
      filePath: '',
      file: '',
      name:'',
      tipo_notificacao:"",
      tipo_pessoa:"",
      nome_denominacao:"",
      nome_comercial:"",
      numero_nif:null,
      rua_responsavel_tratamento:"",
      local_responsavel_tratamento:"",
      caixapostal_responsavel_tratamento:null,
      telefone_responsavel_tratamento:null,
      email_responsavel_tratamento:"",
      nome_representante_tratamento:"",
      rua_representante_tratamento:"",
      caixapostal_representante_tratamento:null,
      local_representante_tratamento:"",
      nome_pessoa_contato:"",
      email_representante_tratamento:"",
      telefone_representante_tratamento:null,
      entidade_processamento_informacao:"",
      rua_entidade_processamento:"",
      caixapostal_entidade_processamento:"",
      local_entidade_processamento:"",
      finalidade_tratamento:[],
      numero_funcionarios: null,
      dados_registrados:[],
      rua_direito_acesso:"",
      caixapostal_direito_acesso:null,
      local_direito_acesso:"",
      email_direito_acesso:"",
      telefone_direito_acesso:null,
      outrasformas_direito_acesso:"",
      medidade_seguranca_fisica:"",
      medidas_seguranca_logica:"",
      parecer_representante_trabalhadores:"",
      catalago_equipamento:"",
      atividadeDesenvolvida:"",
      
     
      
      

      checkCatalogo:false,
      checkMorada: false,
      checkServico: false,
      checkDireitoAcesso: false,
      checkRepTrab: false,
      /** *********************Finalidade de tratamento ************************************** */
      finalidadeTratamento: null,
      finalidadeTratamentos: [
        { id: "Controlo de assiduidade", label: "Controlo de assiduidade" },
        {
          id: "Controlo de acesso às instalações",
          label: "Controlo de acesso às instalações",
        },
      ],
      /** *********************ILHAS E CONCELHOS ************************************** */
      ilhaResp: null,
      ilhaMorInst: null,
      ilhaServExt: null,
      ilhaDirAcess: null,
      ilhas: [
        { value: "Santo Antão", label: "Santo Antão" },
        { value: "São Vicente", label: "São Vicente" },
        { value: "São Nicolau", label: "São Nicolau" },
        { value: "Sal", label: "Sal" },
        { value: "Boa Vista", label: "Boa Vista" },
        { value: "Maio", label: "Maio" },
        { value: "Santiago", label: "Santiago" },
        { value: "Fogo", label: "Fogo" },
        { value: "Brava", label: "Brava" },
      ],
      concelho: null,
      concelhoMorInst: null,
      concelhoServExt: null,
      concelhoDirAcess: null,
      ilhaMorRep: null,
      concelhoMorRep: null,
      concelhoResp: null,

      concelhoServExtSR: null,
      ilhaServExtSR: null,
      ilhaRespSR: null,
      concelhoRespSR: null,
      ilhaMorRepSR: null,
      concelhoMorRepSR: null,

      concelhos: {
        "Santo Antão": [
          { value: "Ribeira Grande", label: "Ribeira Grande" },
          { value: "Paul", label: "Paul" },
          { value: "Porto novo", label: "Porto novo" },
        ],
        "São Vicente": [{ value: "São Vicente", label: "São Vicente" }],
        "São Nicolau": [
          { value: "Ribeira Brava", label: "Ribeira Brava" },
          {
            value: "Tarrafal de São Nicolau",
            label: "Tarrafal de São Nicolau",
          },
        ],
        Sal: [{ value: "Sal", label: "Sal" }],
        "Boa Vista": [{ value: "Boa Vista", label: "Boa Vista" }],
        Maio: [{ value: "Maio", label: "Maio" }],
        Santiago: [
          { value: "Praia", label: "Praia" },
          { value: "São Domingos", label: "São Domingos" },
          { value: "Santa Catarina", label: "Santa Catarina" },
          { value: "São Salvador do Mundo", label: "São Salvador do Mundo" },
          { value: "Santa Cruz", label: "Santa Cruz" },
          {
            value: "São Lourenço dos Órgãos",
            label: "São Lourenço dos Órgãos",
          },
          {
            value: "Ribeira Grande de Santiago",
            label: "Ribeira Grande de Santiago",
          },
          { value: "São Miguel", label: "São Miguel" },
          { value: "Tarrafal", label: "Tarrafal" },
        ],
        Fogo: [
          { value: "São Filipe", label: "São Filipe" },
          { value: "Santa Catarina do Fogo", label: "Santa Catarina do Fogo" },
          { value: "Mosteiros", label: "Mosteiros" },
        ],
        Brava: [{ value: "Brava", label: "Brava" }],
      },
      atividadesDesenvolvidas: [
            { "value": "Actividade de Televisão", "label": "Actividade de Televisão" },
            {
              "value": "Emprego (Selecção, fornecimento de recursos humanos)",
              "label": "Emprego (Selecção, fornecimento de recursos humanos)"
            },
            { "value": "Segurança e Ordem pública", "label": "Segurança e Ordem pública" },
            { "value": "Produção da Água", "label": "Produção da Água" },
            { "value": "Telecomunicação", "label": "Telecomunicação" },
            { "value": "Segurança Privada", "label": "Segurança Privada" },
            {
              "value": "Ensino (Pré-escolar, Básico, Secundário, Superior)",
              "label": "Ensino (Pré-escolar, Básico, Secundário, Superior)"
            },
            {
              "value": "Estabelecimento comercial de venda a público",
              "label": "Estabelecimento comercial de venda a público"
            },
            {
              "value":
                "Serviço de Internet (processamento de dados, domiciliação de informação",
              "label":
                "Serviço de Internet (processamento de dados, domiciliação de informação"
            },
            {
              "value": "Administração Pública (Central, Local)",
              "label": "Administração Pública (Central, Local)"
            },
            { "value": "Saúde", "label": "Saúde" },
            { "value": "Centro Comercial", "label": "Centro Comercial" },
            {
              "value": "Publicidade, Estudos de Mercado, Sondagens de Opinião",
              "label": "Publicidade, Estudos de Mercado, Sondagens de Opinião"
            },
            { "value": "Negócios Estrangeiros", "label": "Negócios Estrangeiros" },
            { "value": "Previdência Social", "label": "Previdência Social" },
            {
              "value": "Alojamento (Hotel, Residencial, Pensão, etc.)",
              "label": "Alojamento (Hotel, Residencial, Pensão, etc.)"
            },
            { "value": "Defesa", "label": "Defesa" },
            { "value": "Actividade Financeira", "label": "Actividade Financeira" },
            { "value": "Comércio Electrónico", "label": "Comércio Electrónico" },
            { "value": "Informática", "label": "Informática" },
            { "value": "Justiça", "label": "Justiça" },
            { "value": "Seguros", "label": "Seguros" },
            {
              "value": "Transporte (Aéreo, Marítimo, Terrestre)",
              "label": "Transporte (Aéreo, Marítimo, Terrestre)"
            }
          ],
      dadosRegistrado: null,
      dadosRegistrados: [
        { id: "Impressão digital", label: "Impressão digital" },
        { id: "Contorno da mão", label: "Contorno da mão" },
        { id: "Reconhecimento", label: "Reconhecimento" },
        { id: "Íris", label: "Íris" },
        { id: "Geometria das veias", label: "Geometria das veias" },
        { id: "Assinatura", label: "Assinatura" },
        { id: "Voz", label: "Voz" },
      ],
      outrosDado: null,
      outrosDados: [
        { id: "Nº de empregado", label: "Nº do empregado" },
        { id: "Nome", label: "Nome" },
        { id: "Telefone", label: "Telefone" },
        { id: "Horário", label: "Horário" },
        {
          id: "Escalas de serviço",
          label: "Cargo/categoria/função desempenhada",
        },
        { id: "Departamento/secção", label: "Departamento/secção" },
        {
          id: "Data e hora de entrada e saida",
          label: "Data e hora de entrada e saida",
        },
      ],
      formasRegistro: null,
      formasRegistros: [
        { id: "Templete", label: "Templete" },
        { id: "Imagem", label: "Imagem" },
        { id: "Base de dados central", label: "Base de dados central" },
        { id: "Terminal local", label: "Terminal local" },
        { id: "Cartão", label: "Cartão" },
      ],
      tratamentoInfo: null,
      tratamentoInfos: [
        {
          id: "Central num estabelecimento único",
          label: "Central num estabelecimento único",
        },
        {
          id: "Central com vários estabelecimentos",
          label: "Central com vários estabelecimentos",
        },
        { id: "Em cada estabelecimento", label: "Em cada estabelecimento" },
      ],
      /*******************************************TIPO DE NOTIFICAÇÃO ******************************************/
      tipoNotificacao: null,
      tipoNotificacoes: [
        { value: "1ª Notificação", label: "1ª Notificação" },
        { value: "Alteração", label: "Alteração" },
        {
          value: "Substituição da Notificação não autorizada",
          label: "Substituição da Notificação não autorizada",
        },
      ],
      tiposVideovigilancias: [
            { "value": "Centros Comerciais", "label": "Centros Comerciais" },
            {
              "value": "Edifícios de habitação Condomínios",
              "label": "Edifícios de habitação Condomínios"
            },
            {
              "value": "Estabelecimentos comerciais de venda ao público",
              "label": "Estabelecimentos comerciais de venda ao público"
            },
            {
              "value": "Estabelecimentos de Ensino e Similares",
              "label": "Estabelecimentos de Ensino e Similares"
            },
            { "value": "Estabelecimentos de Saude", "label": "Estabelecimentos de Saude" },
            {
              "value": "Estabelecimentos destinados a dança",
              "label": "Estabelecimentos destinados a dança"
            },
            {
              "value": "Farmácias, ParaFarmácias e Posto de Venda de Medicamentos e Similares",
              "label": "Farmácias, ParaFarmácias e Posto de Venda de Medicamentos e Similares"
            },
            { "value": "Gasolineiras", "label": "Gasolineiras" },
            { "value": "Hotelaria", "label": "Hotelaria" },
            {
              "value": "Instalações empresariais industriais e de serviços",
              "label": "Instalações empresariais industriais e de serviços"
            },
            { "value": "Instituiçoes Financeiras", "label": "Instituiçoes Financeiras" },
            {
              "value": "Lares e outros Estabelecimentos de Apoio Social",
              "label": "Lares e outros Estabelecimentos de Apoio Social"
            },
            { "value": "Locais de Culto", "label": "Locais de Culto" },
            {
              "value": "Museus, Bibliotecas e Salas de Espectáculo",
              "label": "Museus, Bibliotecas e Salas de Espectáculo"
            },
            {
              "value": "Ourivesarias,Joalharias e Relojoarias",
              "label": "Ourivesarias,Joalharias e Relojoarias"
            },
            { "value": "Parques de Estacionamento", "label": "Parques de Estacionamento" },
            {
              "value": "Recintos Espectáculos desportivos",
              "label": "Recintos Espectáculos desportivos"
            },
            {
              "value": "Residências Moradias Unifamiliares",
              "label": "Residências Moradias Unifamiliares"
            },
            { "value": "Restauração", "label": "Restauração" },
            { "value": "Sucateiras", "label": "Sucateiras" },
            {
              "value": "Formulário geral de videovigilância",
              "label": "Formulário geral de videovigilância"
            }
          ],
    };
  },
  methods: {

    getImg(event){

     this.parecer_representante_trabalhadores = event.target.files[0];

     console.log(this.parecer_representante_trabalhadores);
    },
    getcatalago(event){
      this.catalago_equipamento = event.target.files[0];

      console.log(this.catalago_equipamento);
    },

   

    async onSubmit() {
      const data = {
        tipo_notificacao:   this.tipo_notificacao,
        tipo_pessoa:  this.tipo_pessoa,
        nome_denominacao:   this.nome_denominacao,
        atividade_desenvolvida: this.atividadeDesenvolvida,
        nome_comercial:   this.nome_comercial,
        numero_nif:   this.numero_nif,
        rua_responsavel_tratamento:   this.rua_responsavel_tratamento,
        local_responsavel_tratamento:   this.local_responsavel_tratamento,
        ilha_responsavel_tratamento:    this.ilhaResp,
        concelho_responsavel_tratamento:  this.concelhoResp,
        caixapostal_responsavel_tratamento:this.caixapostal_responsavel_tratamento,
        telefone_responsavel_tratamento:this.telefone_responsavel_tratamento,
        email_responsavel_tratamento:this.email_responsavel_tratamento,
        pais_responsavel_tratamento:this.paisResp,
        nome_representante_tratamento:this.nome_representante_tratamento,
        rua_representante_tratamento:this.rua_representante_tratamento,
        caixapostal_representante_tratamento:this.caixapostal_representante_tratamento,
        local_representante_tratamento:this.local_representante_tratamento,
        ilha_representante_tratamento:this.ilhaMorRep,
        concelho_representante_tratamento:this.concelhoMorRep,
        nome_pessoa_contato:this.nome_pessoa_contato,
        email_representante_tratamento:this.email_representante_tratamento,
        telefone_representante_tratamento:this.telefone_representante_tratamento,
        entidade_processamento_informacao:this.entidade_processamento_informacao,
        rua_entidade_processamento:this.rua_entidade_processamento,
        caixapostal_entidade_processamento:this.caixapostal_entidade_processamento,
        local_entidade_processamento:this.local_entidade_processamento,
        ilha_entidade_processamento:this.ilhaServExt,
        concelho_entidade_processamento:this.concelhoServExt,
        finalidade_tratamento:this.finalidadeTratamento,
        numero_funcionarios:this.numero_funcionarios,
        dados_registrados:this.dadosRegistrado,
        outros_dados:this.outrosDado,
        forma_registro:this.formasRegistro,
        forma_tratamento_informacao:this.tratamentoInfo,
        rua_direito_acesso:this.rua_direito_acesso,
        caixapostal_direito_acesso:this.caixapostal_direito_acesso,
        local_direito_acesso:this.local_direito_acesso,
        ilha_direito_acesso:this.ilhaDirAcess,
        concelho_direito_acesso:this.concelhoDirAcess,
        email_direito_acesso:this.email_direito_acesso,
        telefone_direito_acesso:this.telefone_direito_acesso,
        forma_direito_acesso:this.formaDireitoAcesso,
        outrasformas_direito_acesso:this.outrasformas_direito_acesso,
        medidade_seguranca_fisica:this.medidade_seguranca_fisica,
        medidas_seguranca_logica:this.medidas_seguranca_logica,
        parecer_representante_trabalhadores: this.parecer_representante_trabalhadores,
        catalago_equipamento: this.catalago_equipamento,
        
        
        
      };
      //SUBMIT FORM WITH AXIOS
      
      try {  
      await axios.post(`${API_ENDPOINT}/api/biometria/store`, data, { 
        headers: { "Content-Type": "multipart/form-data; charset=utf-8" },
      }); 
      this.showModal = !this.showModal; 
      setTimeout(function(){
        window.location.reload();
      }, 5000)

    }catch(error){
          this.ErrorModal = !this.ErrorModal; 
        setTimeout(function(){
          window.location.reload();
        }, 5000)
    
       
       
      }
        
      
      //limpar Message

    

      
     
      
    
        
         
    },
    closeError(event) {
      this.ErrorModal = !this.ErrorModal; 
     event.preventDefault();
      window.location.reload();
    },
    closeSuccess(event) {
      this.showModal = !this.showModal;  
    event.preventDefault();
    window.location.reload();
    },
    validateText(value) {
      // if the field is empty
      if (!value) {
        return "Campo obrigatório!";
      }
      return true;
    },

    validateRadio(value) {
      // if the field is empty
      if (!value) {
        return "Precisa selecionar uma opção!";
      }
      return true;
    },
    
   

    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return "Campo obrigatório!";
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "Email inválido, precisa ser nesse formato: cnpd@example.cv";
      }
      // All is good
      return true;
    },

    validateNumber(value) {
      // if the field is empty
      if (!value) {
        return "Campo obrigatório!";
      }
      // if the field is not a valid number
      const regex = /[0-9]/;
      if (!regex.test(value)) {
        return "Carater inválido, Precisa ser um número!";
      }

      return true;
    },

    changeMorada() {
      this.checkMorada = !this.checkMorada;
    },
    changeServico() {
      this.checkServico = !this.checkServico;
    },
    changeDireitoAcesso() {
      this.checkDireitoAcesso = !this.checkDireitoAcesso;
    },
    changeRepTrab() {
      this.checkRepTrab = !this.checkRepTrab;
    },
    Changecatalago(){
      this.checkCatalogo = !this.checkCatalogo;
    }
  },
};
</script>

<style scoped>
 
 
#fin {
  display: flex;
  justify-content: space-around;
}

#divg {
  font-family: "Times New Roman", Times, serif;
  border: 1px solid #061536;
  padding: 10px;
  border-radius: 10px;
}
.col {
  font-family: "Times New Roman", Times, serif;
}
#divg2 {
  font-family: "Times New Roman", Times, serif;
  border: 1px solid #061536;
  padding: 10px;
  margin-top: 10px;
  padding-top: 20px;
  border-radius: 10px;
}
.col {
  font-family: "Times New Roman", Times, serif;
}
input,
label {
  font-family: "Times New Roman", Times, serif;
}
input {
  margin-bottom: 10px;
}

option:hover {
  background-color: yellow;
}

#separacao {
  font-family: "Times New Roman", Times, serif;
  padding-left: 10px;
  text-align: center;
  color: #ffffff;
  border-style: ridge;
  border-radius: 10px;
  background: #061536;
}
#buttonsave {
  background-color: #061536;
}
#divsave {
  text-align: center;
}
button#buttonsave:hover,
button#buttonsave:focus {
  background-color: #061536;
  outline: none !important;
  border-color: #061536;
  color: #bd9a13;
  box-shadow: 0 0 10px #061536;
}
#labelleft {
  text-align: center;
}
#divloco {
  margin-top: 10px;
}
#moradasimbotton {
  color: #061536;
  border-color: #061536;
}
#moradasimbotton:hover {
  background-color: #061536;
  color: #fff;
  border: 2px solid #bd9a13;
}

.icon-box {
  background-color: white;
}
.section-title {
  text-align: center;
  padding-bottom: 30px;
}
.section-title h2 {
  font-size: 13px;
  letter-spacing: 1px;
  font-weight: 700;
  padding: 8px 20px;
  line-height: 1;
  margin: 0;
  background: #bd9a13;
  color: #000;
  display: inline-block;
  text-transform: uppercase;
  border-radius: 50px;
}
</style>
