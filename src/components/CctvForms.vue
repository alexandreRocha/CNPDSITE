<template>
  <section id="cctv" class="cctv">
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
          <router-link style="text-decoration: none" to="/formscctv">
            <b>Formulário de Videovigilância - CCTV</b>
          </router-link>
        </h5>
      </div>
      <Form @submit="onSubmit">
        <!-- FORMS CCTV-->
        <div class="section-title">
          <h2>NOTIFICAÇÃO DE VIDEOVIGILÂNCIA</h2>
        </div>
        <div class="col-md-12" id="divg">
          <div class="container">
            <div class="row">
              <div class="col">
                <label id="labelleft" for="finalidade" class="form-label"
                  >Finalidade</label
                >
                <input
                  class="form-control"
                  type="text"
                  placeholder="Proteção de Pessoas e Bens"
                  aria-label="Disabled input example"
                  disabled 
                  name="finalidade_cctv"
                  id="finalidade_cctv"
                  v-model="finalidade_cctv"
                />
              </div>
              <div class="col">
                <label id="labelleft" for="tipoNotificacao" class="form-label"
                  >Tipo Notificação</label
                >
                <Field
                  name="tipoNotificacao"
                  as="select"
                  class="form-select"
                  v-model="tipoNotificacao"
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
              <div class="col">
                <label
                  id="labelleft"
                  for="tipoVideovigilancia"
                  class="form-label"
                  >Tipo Videovigilância</label
                >
                <Field
                  as="select"
                  class="form-select"
                  v-model="tipoVideovigilancia"
                  name="tipoVideovigilancia"
                  id="tipoVideovigilancia"
                  for="tipoVideovigilancia"
                  :rules="validateRadio"
                >
                  <option value="">- Tipo de Videovigilância -</option>
                  <option
                    v-for="tipoVideovigilancia in tiposVideovigilancias"
                    :key="tipoVideovigilancia.value"
                    :value="tipoVideovigilancia.value"
                  >
                    {{ tipoVideovigilancia.value }}
                  </option>
                </Field>
                <ErrorMessage class="errorMessage" name="tipoVideovigilancia" />
                <!--  <pre
                  class="language-json"
                ><code>Id pra mandar pra BD:{{ tipoVideovigilancia  }}</code></pre>-->
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12"></div>
        <div class="col-md-12" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="separacao">
                1. Responsável pelo Tratamento
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col-md-4"></div>
              <div class="col-md-2" id="alignCenter">
                <Field
                  :rules="validateRadio"
                  type="radio"
                  id="tipoPessoa"
                  name="tipoPessoa"
                  value="Pessoa Singular"
                  v-model="tipoPessoa"
                />
                <label for="Pessoa Singular"> Pessoa Singular</label>
              </div>
              <div class="col-md-2" id="alignCenter">
                <Field
                  :rules="validateRadio"
                  type="radio"
                  id="tipoPessoa"
                  name="tipoPessoa"
                  value="Pessoa Coletiva"
                  v-model="tipoPessoa"
                />
                <label for="Pessoa Coletiva"> Pessoa Coletiva</label>
              </div>
              <div class="col-md-4"></div>
              <div class="col-md-12" id="alignCenter">
                <ErrorMessage class="errorMessage" name="tipoPessoa" />
              </div>
              <div class="col-md-12">
                <Field
                  :rules="validateText"
                  type="text"
                  class="form-control"
                  name="nome_denominacao"
                  id="nome_denominacao"
                  v-model="nome_denominacao"
                  alt="Nome Denominação: Refere-se à designação oficial de uma instituição pública ou privada"
                  placeholder=" Nome/Denominação"
                />
                <ErrorMessage class="errorMessage" name="nome_denominacao" />
              </div>

              <div class="col-md-12">
                <Field
                  type="text"
                  class="form-control"
                  name="nome_comercial"
                  id="nome_comercial"
                  v-model="nome_comercial"
                  alt="Nome comercial: Pode ser a sigla ou designação em relação ao qual a instituição é mais conhecida."
                  placeholder=" Nome/Comercial"
                />
              </div>
              <div class="col">
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
                  :rules="validateNumber"
                  type="number"
                  class="form-control"
                  name="numero_nif"
                  id="numero_nif"
                  v-model="numero_nif"
                  alt="NIF"
                  placeholder="Número de NIF"
                />
                <ErrorMessage class="errorMessage" name="numero_nif" />
              </div>
              <div class="col-md-12">
                <div class="row">
                  <div class="col">
                    <Field
                      type="text"
                      class="form-control"
                      name="rua_responsavel_tratamento"
                      id="rua_responsavel_tratamento"
                      v-model="rua_responsavel_tratamento"
                      placeholder="Entre o nome da Rua"
                    />
                  </div>
                  <div class="col">
                    <Field
                      :rules="validateText"
                      type="text"
                      class="form-control"
                      name="local_responsavel_tratamento"
                      id="local_responsavel_tratamento"
                      v-model="local_responsavel_tratamento"
                      placeholder="Cidade/Vila/Lugar/Zona"
                    />
                    <ErrorMessage
                      class="errorMessage"
                      name="local_responsavel_tratamento"
                    />
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
                      :rules="validateRadio"
                    >
                      <option value="">- selecione um concelho -</option>
                      <option
                        v-for="concelho in concelhos[ilhaResp]"
                        :key="concelho.value"
                        :value="concelho.value"
                      >
                        {{ concelho.value }}
                      </option>
                    </Field>
                    <ErrorMessage class="errorMessage" name="concelhoResp" />
                  </div>
                </div>
              </div>
              <div class="col-md-12" id="divloco">
                <div class="row">
                  <div class="col">
                    <Field
                      type="text"
                      class="form-control"
                      name="caixapostal_responsavel_tratamento"
                      id="caixapostal_responsavel_tratamento"
                      v-model="caixapostal_responsavel_tratamento"
                      placeholder="Entre o número da Caixa Postal"
                    />
                  </div>
                  <div class="col">
                    <Field
                      :rules="validateNumber"
                      v-model="telefone_responsavel_tratamento"
                      type="number"
                      class="form-control"
                      name="telefone_responsavel_tratamento"
                      id="telefone_responsavel_tratamento"
                      placeholder="Contato: Telefone/Telemovel"
                    />
                    <ErrorMessage
                      class="errorMessage"
                      name="telefone_responsavel_tratamento"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="row">
                  <div class="col">
                    <Field
                      :rules="validateEmail"
                      type="email"
                      class="form-control"
                      name="email_responsavel_tratamento"
                      id="email_responsavel_tratamento"
                      v-model="email_responsavel_tratamento"
                      placeholder="Entre o seu email: example@cnpd.cv"
                    />
                    <ErrorMessage
                      class="errorMessage"
                      name="email_responsavel_tratamento"
                    />
                  </div>
                  <div class="col">
                    <div class="col">
                      <Field
                        :rules="validateRadio"
                        type="radio"
                        id="pais_responsavel_tratamento"
                        name="pais_responsavel_tratamento"
                        value="Cabo Verde"
                        v-model="pais_responsavel_tratamento"
                      />
                      <label for="Pessoa Singular"> Cabo Verde</label>
                    </div>
                    <div class="col">
                      <Field
                        :rules="validateRadio"
                        type="radio"
                        id="pais_responsavel_tratamento"
                        name="pais_responsavel_tratamento"
                        value=" Fora do Território Nacional"
                        v-model="pais_responsavel_tratamento"
                      />
                      <label for=" Fora do Território Nacional">
                        Fora do Território Nacional</label
                      >
                    </div>
                    <ErrorMessage
                      class="errorMessage"
                      name="pais_responsavel_tratamento"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ------------------------------------ Morada Local de Instalação   ---------------------------------------------------------------------->
        <div class="col" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="separacao">
                Morada Local de Instalação
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col">
                <label class="form-check-label">
                  Morada do local da instalação é a mesma indicada no ponto 1?
                </label>
                <buttom
                  @click="changeMorada"
                  type="button"
                  class="btn btn-outline-primary"
                  name="morada"
                  id="moradasimbotton"
                >
                  {{ checkMorada ? "Sim" : "Não" }}
                </buttom>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-md-12" v-if="checkMorada1">
                    <div class="row">
                      <div class="col-md-12" id="divloco">
                        <Field
                          :rules="validateText"
                          type="text"
                          class="form-control"
                          name="nome_pessoa_contato_representante_instalacao"
                          id="nome_pessoa_contato_representante_instalacao"
                          v-model="nome_pessoa_contato_representante_instalacao"
                          placeholder="Nome da pessoa de contato"
                        />
                        <ErrorMessage
                          class="errorMessage"
                          name="nome_pessoa_contato_representante_instalacao"
                        />
                      </div>

                      <div class="col-md-12">
                        <div class="row">
                          <div class="col">
                            <Field
                              :rules="validateEmail"
                              type="email"
                              class="form-control"
                              name="email_pessoa_representante_instalacao"
                              id="email_pessoa_representante_instalacao"
                              v-model="email_pessoa_representante_instalacao"
                              placeholder="Entre o email da pessoa de contato: example@cnpd.cv"
                            />
                            <ErrorMessage
                              class="errorMessage"
                              name="email_pessoa_representante_instalacao"
                            />
                          </div>
                          <div class="col">
                            <Field
                              :rules="validateNumber"
                              type="number"
                              class="form-control"
                              name="contato_representante_instalacao"
                              id="contato_representante_instalacao"
                              v-model="contato_representante_instalacao"
                              placeholder="Contato: Telefone/Telemovel"
                            />
                            <ErrorMessage
                              class="errorMessage"
                              name="contato_representante_instalacao"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12" id="divg2" v-if="checkMorada">
                <div class="col-md-12">
                  <Field
                    :rules="validateText"
                    type="text"
                    class="form-control"
                    name="nome_representante_instalacao"
                    id="nome_representante_instalacao"
                    v-model="nome_representante_instalacao"
                    placeholder=" Representante da Morada de Instalação"
                  />
                  <ErrorMessage
                    class="errorMessage"
                    name="nome_representante_instalacao"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    type="text"
                    class="form-control"
                    name="rua_representante_instalacao"
                    id="rua_representante_instalacao"
                    v-model="rua_representante_instalacao"
                    placeholder=" Rua do Local de instalação"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    type="text"
                    class="form-control"
                    name="caixapostal_representante_instalacao"
                    id="caixapostal_representante_instalacao"
                    v-model="caixapostal_representante_instalacao"
                    placeholder=" Caixa Postal"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    :rules="validateText"
                    type="text"
                    class="form-control"
                    name="local_representante_instalacao"
                    id="local_representante_instalacao"
                    v-model="local_representante_instalacao"
                    placeholder=" Local de instalação - Cidade/Vila/Lugar/Zona"
                  />
                  <ErrorMessage
                    class="errorMessage"
                    name="local_representante_instalacao"
                  />
                </div>

                <div class="col-md-12">
                  <div class="row">
                    <div class="col">
                      <Field
                        as="select"
                        class="form-select"
                        v-model="ilhaMorInst"
                        name="ilhaMorInst"
                        id="ilhaMorInst"
                        for="ilhaMorInst"
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
                      <ErrorMessage class="errorMessage" name="ilhaMorInst" />
                    </div>
                    <div class="col">
                      <Field
                        as="select"
                        class="form-select"
                        v-model="concelhoMorInst"
                        name="concelhoMorInst"
                        id="concelhoMorInst"
                        for="concelhoMorInst"
                        :rules="validateRadio"
                      >
                        <option value="">- selecione um concelho -</option>
                        <option
                          v-for="concelho in concelhos[ilhaMorInst]"
                          :key="concelho.value"
                          :value="concelho.value"
                        >
                          {{ concelho.value }}
                        </option>
                      </Field>
                      <ErrorMessage
                        class="errorMessage"
                        name="concelhoMorInst"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="row">
                    <div class="col-md-12" id="divloco">
                      <Field
                        :rules="validateText"
                        type="text"
                        class="form-control"
                        name="nome_pessoa_contato_representante_instalacao"
                        id="nome_pessoa_contato_representante_instalacao"
                        v-model="nome_pessoa_contato_representante_instalacao"
                        placeholder="Nome da pessoa de contato"
                      />
                      <ErrorMessage
                        class="errorMessage"
                        name="nome_pessoa_contato_representante_instalacao"
                      />
                    </div>

                    <div class="col-md-12">
                      <div class="row">
                        <div class="col">
                          <Field
                            :rules="validateEmail"
                            type="email"
                            class="form-control"
                            name="email_pessoa_representante_instalacao"
                            id="email_pessoa_representante_instalacao"
                            v-model="email_pessoa_representante_instalacao"
                            placeholder="Entre o email da pessoa de contato: example@cnpd.cv"
                          />
                          <ErrorMessage
                            class="errorMessage"
                            name="email_pessoa_representante_instalacao"
                          />
                        </div>
                        <div class="col">
                          <Field
                            :rules="validateNumber"
                            type="number"
                            class="form-control"
                            name="contato_representante_instalacao"
                            id="contato_representante_instalacao"
                            v-model="contato_representante_instalacao"
                            placeholder="Contato: Telefone/Telemovel"
                          />
                          <ErrorMessage
                            class="errorMessage"
                            name="contato_representante_instalacao"
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

        <!---- ----------------- Processamento da informação--------------------------------------------------------------------->
        <div class="col" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="separacao">
                Processamento da informação
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col">
                <label class="form-check-label">
                  Existe um Serviço Externo encarregado do processamento?
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
              <div class="col-md-12" id="divg2" v-if="checkServico">
                <div class="col-md-12">
                  <Field
                    :rules="validateText"
                    type="text"
                    class="form-control"
                    name="entidade_processamento_informacao"
                    id="entidade_processamento_informacao"
                    v-model="entidade_processamento_informacao"
                    placeholder=" Qual a Entidade Encarregue pelo proccessamento das imagens"
                  />
                  <ErrorMessage
                    class="errorMessage"
                    name="entidade_processamento_informacao"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    :rules="validateText"
                    type="text"
                    class="form-control"
                    name="rua_processamento_informacao"
                    id="rua_processamento_informacao"
                    v-model="rua_processamento_informacao"
                    placeholder=" Rua"
                  />
                  <ErrorMessage class="errorMessage" name="ruaProcessInfo" />
                </div>
                <div class="col-md-12">
                  <Field
                    type="text"
                    class="form-control"
                    name="caixapostal_processamento_informacao"
                    id="caixapostal_processamento_informacao"
                    v-model="caixapostal_processamento_informacao"
                    placeholder=" Caixa Postal"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    :rules="validateText"
                    type="text"
                    class="form-control"
                    name="local_processamento_informacao"
                    id="local_processamento_informacao"
                    v-model="local_processamento_informacao"
                    placeholder="Cidade/Vila/Lugar/Zona da Entidade"
                  />
                  <ErrorMessage
                    class="errorMessage"
                    name="local_processamento_informacao"
                  />
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
                        :rules="validateRadio"
                        placeholder="- Seleciona uma ilha-"
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
        <div class="col-md-12" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="separacao">
                2. Caraterísticas do sistema
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col">
                <Field
                  :rules="validateNumber"
                  type="number"
                  class="form-control"
                  name="numero_camaras"
                  id="numero_camaras"
                  v-model="numero_camaras"
                  placeholder=" Nº total de câmaras instaladas"
                />
                <ErrorMessage class="errorMessage" name="numero_camaras" />
              </div>
              <div
                class="col"
                v-if="
                  tipoVideovigilancia != 'Formulário geral de videovigilância'
                "
              >
                <Multiselect
                  v-model="zona"
                  :options="zonasAbrangidas[tipoVideovigilancia]"
                  mode="tags"
                  placeholder="- Selecione as áreas abrangidas pelas câmaras -"
                />
              </div>
              <div
                class="col"
                v-if="
                  tipoVideovigilancia == 'Formulário geral de videovigilância'
                "
              >
                <Field
                  name="zona"
                  id="zona"
                  as="textarea"
                  class="form-control"
                  v-model="zona"
                  :rules="validateText"
                  placeholder="Indique quais são as zonas abrangidas pelas câmaras. Por ex:  corredores, pontos exteriores, parque estacionamento, zonas internas de circulação, etc..."
                />
                <ErrorMessage class="errorMessage" name="zona" />
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col">
                <div class="col">
                  <label class="form-check-label">
                    Existe transmissão das imagems para fora da instalação?
                  </label>
                  <buttom
                    @click="changeTranssmisao"
                    type="button"
                    class="btn btn-outline-primary"
                    name="morada"
                    id="moradasimbotton"
                  >
                    {{ checkTransmissao ? "Não" : "Sim" }}
                  </buttom>
                </div>
                <div class="col-md-12"><br /></div>
                <div class="col-md-12" v-if="checkTransmissao">
                  <Field
                    name="local_transmissao_imagens"
                    as="textarea"
                    class="form-control"
                    v-model="local_transmissao_imagens"
                    :rules="validateText"
                    placeholder=" Local para onde é realizada a transmissão: Ex: Por telemóvel, etc, ... "
                  />
                  <ErrorMessage
                    class="errorMessage"
                    name="local_transmissao_imagens"
                  />
                </div>
              </div>
              <div class="col">
                <div class="col">
                  <label class="form-check-label">
                    Existe visualização das imagems em Tempo Real?
                  </label>
                  <buttom
                    @click="changeTempoReal"
                    type="button"
                    class="btn btn-outline-primary"
                    name="morada"
                    id="moradasimbotton"
                  >
                    {{ checkTempoReal ? "Não" : "Sim" }}
                  </buttom>
                </div>
                <div class="col-md-12"><br /></div>
                <div class="col-md-12" v-if="checkTempoReal">
                  <Field
                    name="quem_tem_acesso_imagens"
                    as="textarea"
                    class="form-control"
                    v-model="quem_tem_acesso_imagens"
                    :rules="validateText"
                    placeholder=" Quem tem acesso às imagens em tempo real? Indicar todas as pessoas quem têm acesso ás imagens"
                  />
                  <ErrorMessage
                    class="errorMessage"
                    name="quem_tem_acesso_imagens"
                  />
                </div>
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col">
                <div class="col">
                  <label class="form-check-label">
                    Caso as zonas abrangidas pelas câmaras não se encontram na
                    lista acima, mencione aqui todas as áreas abrangidas pelo
                    circuito de videovigilância.
                  </label>
                </div>
                <div class="col-md-12"></div>
                <div class="col-md-12">
                  <Field
                    name="outraszonas_abrangidas"
                    as="textarea"
                    class="form-control"
                    v-model="outraszonas_abrangidas"
                    placeholder=" Solicita-se que se indique todas as zonas que ficam sob o alcance das câmaras de videovigilância, no exterior e/ou no interior. "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="separacao">
                3.Exercício do direito de acesso às imagens gravadas
              </div>
              <div class="col">
                <label class="form-check-label">
                  Morada do local do exercício do direito de acesso é a mesma
                  indicada em 1?
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
              <div class="col-md-12" id="divg2" v-if="checkDireitoAcesso">
                <div class="col-md-12">
                  <Field
                    type="text"
                    class="form-control"
                    name="rua_direito_acesso"
                    id="rua_direito_acesso"
                    v-model="rua_direito_acesso"
                    placeholder="Rua do Responsável pelo tratamento"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    type="text"
                    class="form-control"
                    name="caixapostal_direito_acesso"
                    id="caixapostal_direito_acesso"
                    v-model="caixapostal_direito_acesso"
                    placeholder=" Caixa Postal"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    :rules="validateText"
                    type="text"
                    class="form-control"
                    name="local_direito_acesso"
                    id="local_direito_acesso"
                    v-model="local_direito_acesso"
                    placeholder=" Local - Cidade/Vila/Lugar/Zona"
                  />
                  <ErrorMessage
                    class="errorMessage"
                    name="local_direito_acesso"
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
                        id="ilhaDirAcess"
                        for="ilhaDirAcess"
                        :rules="validateRadio"
                        placeholder="- Seleciona uma ilha-"
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
                        :rules="validateRadio"
                      >
                        <option value="">- selecione um concelho -</option>
                        <option
                          v-for="concelho in concelhos[ilhaDirAcess]"
                          :key="concelho.value"
                          :value="concelho.value"
                        >
                          {{ concelho.value }}
                        </option>
                      </Field>
                      <ErrorMessage
                        class="errorMessage"
                        name="concelhoDirAcess"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-12"><br /></div>
                <div class="col-md-12">
                  <div class="row">
                    <div class="col">
                      <Field
                        :rules="validateEmail"
                        type="email"
                        class="form-control"
                        name="email_direito_acesso"
                        id="email_direito_acesso"
                        v-model="email_direito_acesso"
                        placeholder="Entre o email da pessoa de contato: example@cnpd.cv"
                      />
                      <ErrorMessage
                        class="errorMessage"
                        name="emailDireitoAcesso"
                      />
                    </div>
                    <div class="col">
                      <Field
                        :rules="validateNumber"
                        type="number"
                        class="form-control"
                        name="contato_direito_acesso"
                        id="contato_direito_acesso"
                        v-model="contato_direito_acesso"
                        placeholder="Contato: Telefone/Telemovel"
                      />
                      <ErrorMessage
                        class="errorMessage"
                        name="contato_direito_acesso"
                      />
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
                  id="forma_direito_acesso"
                  name="forma_direito_acesso"
                  value="Presencial"
                  v-model="forma_direito_acesso"
                />
                <label> Presencial</label>
              </div>
              <div class="col-md-2" id="alignCenter">
                <Field
                  :rules="validateRadio"
                  type="checkbox"
                  id="forma_direito_acesso"
                  name="forma_direito_acesso"
                  value="Escrita"
                  v-model="forma_direito_acesso"
                />
                <label> Escrita</label>
              </div>
               
              <div class="col-md-12" id="alignCenter">
                <ErrorMessage class="errorMessage" name="forma_direito_acesso" />
              </div>
              <div class="col-md-12">
                <Field
                  name="outraforma_direito_acesso"
                  as="textarea"
                  class="form-control"
                  v-model="outraforma_direito_acesso"
                  placeholder=" Mencionar outras formas de direito de acesso, caso não for mencionado acima"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="separacao">
                4. Medidas de segurança a implementar
              </div>
              <div class="col-md-12">
                <label
                  id="labelleft"
                  class="form-check-label" 
                >
                  Especifique as medidas físicas de segurança do sistema:
                </label>
                <Field
                  name="medidas_fisicas_seguranca"
                  as="textarea"
                  class="form-control"
                  v-model="medidas_fisicas_seguranca"
                  :rules="validateText"
                  placeholder="Ocorre quando temos barreiras físicas que impeçam que pessoas não autorizadas tenham acesso a espaços onde os dados estão guardados"
                />
                <ErrorMessage class="errorMessage" name="medidas_fisicas_seguranca" />
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col-md-12">
                <label
                  id="labelleft"
                  class="form-check-label" 
                >
                  Especifique as medidas lógica de segurança do sistema:
                </label>
                <Field
                  name="medidas_logicas_seguranca"
                  as="textarea"
                  class="form-control"
                  v-model="medidas_logicas_seguranca"
                  :rules="validateText"
                  placeholder="Consiste na implementação de chaves de acesso, encriptação do conteúdo e registos de operações efectuadas no sistema"
                />
                <ErrorMessage class="errorMessage" name="medidas_logicas_seguranca" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="separacao">
                5. Representante dos trabalhadores
              </div>
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
                  pedido em formato PDF.</label
                >
                <Field
                  v-model="parecer_representante_trabalhadores"
                  name="parecer_representante_trabalhadores"
                  class="form-control"
                  type="file"
                  ref="file"
                  :rules="validateText" 
                  accept="application/pdf"
                  
                />

                <!--accept="image/png, image/gif, image/jpeg"-->
                
                <ErrorMessage class="errorMessage" name="parecer_representante_trabalhadores" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12"><br /></div>
        <!-- FIM DE FORMS-->
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
            <!------------------FIM DE MODAL SHOW------------------------->
      </Form>
    </div>
  </section>
</template>

<script>
import Multiselect from "@vueform/multiselect";
import { Form, Field, ErrorMessage } from "vee-validate";
import axios from "axios";
import { API_ENDPOINT } from "../main.js";

export default {
  components: {
    Multiselect,
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      showModal: false,
      ErrorModal: false,
      checkMorada: false,
      checkMorada1: true,
      checkServico: false,
      checkTempoReal: false,
      checkTransmissao: false,
      checkDireitoAcesso: false,
      checkRepTrab: false,
      /**************************TIPO NOTIFICACAO *********************************** */
      
      tipoNotificacao: null,
      /******************************ZTIPOS DE CCTV*******************************/
      tipoVideovigilancia: null, 
      /******************************ZONAS ABRANGIDAS*******************************/
      message: null,
      zona: null, 
      selected: null,
      zonasAbrangidas: {
        "Centros Comerciais": [
          {
            value: "Pontos de acesso a partir do exterior",
            label: "Pontos de acesso a partir do exterior",
          },
          {
            value: "Acesso a elevadores",
            label: "Acesso a elevadores",
          },
          {
            value: "Parque de estacionamento",
            label: "Parque de estacionamento",
          },
          {
            value: "Zona de ATM's (Caixa vinte e quatro)",
            label: "Zona de ATM's (Caixa vinte e quatro)",
          },
          {
            value: "Zonas internas de circulação",
            label: "Zonas internas de circulação",
          },
          {
            value: "Área de venda",
            label: "Área de venda",
          },
          {
            value: "Armazéns",
            label: "Armazéns",
          },
          {
            value: "Máquinas de Vending",
            label: "Máquinas de Vending",
          },
          {
            value: "Zonas técnicas",
            label: "Zonas técnicas",
          },
        ],
        "Edifícios de habitação Condomínios": [
          {
            value: "Áreas comuns ",
            label: "Áreas comuns ",
          },
          {
            value: "Pontos de acesso a partir do exterior",
            label: "Pontos de acesso a partir do exterior",
          },
          {
            value: "Parque de estacionamento",
            label: "Parque de estacionamento",
          },
          {
            value: "Zonas internas de circulação",
            label: "Zonas internas de circulação",
          },
          {
            value: "Acesso a elevadores",
            label: "Acesso a elevadores",
          },
          {
            value: "Pontos de acesso interiores",
            label: "Pontos de acesso interiores",
          },
          {
            value: "Garagens",
            label: "Garagens",
          },
        ],
        "Estabelecimentos comerciais de venda ao público": [
          {
            value: "Pontos de acesso a partir do exterior",
            label: "Pontos de acesso a partir do exterior",
          },
          {
            value: "Área de venda",
            label: "Área de venda",
          },
          {
            value: "Zonas das caixas registadoras",
            label: "Zonas das caixas registadoras",
          },
          {
            value: "Parque de estacionamento",
            label: "Parque de estacionamento",
          },
          {
            value: "Sala de contagem de valores",
            label: "Sala de contagem de valores",
          },
          {
            value: "Área de cofre",
            label: "Área de cofre",
          },
          {
            value: "Zonas internas de circulação",
            label: "Zonas internas de circulação",
          },
          {
            value: "Armazéns",
            label: "Armazéns",
          },
        ],
        "Estabelecimentos de Ensino e Similares": [
          {
            value: "Pontos de acesso a partir do exterior",
            label: "Pontos de acesso a partir do exterior",
          },
          {
            value: "Parque de estacionamento",
            label: "Parque de estacionamento",
          },
        ],
        "Estabelecimentos de Saude": [
          {
            value: "Acesso a quartos das especialidades infantis ",
            label: "Acesso a quartos das especialidades infantis ",
          },
          {
            value: "Pontos de acesso a partir do exterior",
            label: "Pontos de acesso a partir do exterior",
          },
          {
            value: "Pontos de acesso a divisões interiores (Enfermarias) ",
            label: "Pontos de acesso a divisões interiores (Enfermarias) ",
          },
          {
            value: "Parque de estacionamento",
            label: "Parque de estacionamento",
          },
          {
            value: "Receção",
            label: "Receção",
          },
          {
            value: "Hall e/ou acesso a elevadores ",
            label: "Hall e/ou acesso a elevadores ",
          },
          {
            value: "Farmácias",
            label: "Farmácias",
          },
        ],
        "Estabelecimentos destinados a dança": [
          {
            value: "Pontos de acesso a partir do exterior",
            label: "Pontos de acesso a partir do exterior",
          },
          {
            value: "Bengaleiro",
            label: "Bengaleiro",
          },
          {
            value: "Zonas de pagamento ",
            label: "Zonas de pagamento ",
          },
          {
            value: "Balcões de atendimento",
            label: "Balcões de atendimento",
          },
          {
            value: "Zonas internas de circulação",
            label: "Zonas internas de circulação",
          },
        ],
        "Farmácias, ParaFarmácias e Posto de Venda de Medicamentos e Similares":
          [
            {
              value: "Pontos de acesso a partir do exterior",
              label: "Pontos de acesso a partir do exterior",
            },
            {
              value: "Balcão",
              label: "Balcão",
            },
            {
              value: "Área de venda",
              label: "Área de venda",
            },
            {
              value: "Armazém",
              label: "Armazém",
            },
            {
              value: "Área de Conferência",
              label: "Área de Conferência",
            },
            {
              value: "Área de pagamento ",
              label: "Área de pagamento ",
            },
            {
              value: "Zona de exposição de produtos ",
              label: "Zona de exposição de produtos ",
            },
            {
              value: "Atendimento ao público nocturno ",
              label: "Atendimento ao público nocturno ",
            },
            {
              value: "Laboratório",
              label: "Laboratório",
            },
          ],
        Gasolineiras: [
          {
            value: "Pontos de acesso a partir do exterior",
            label: "Pontos de acesso a partir do exterior",
          },
          {
            value: "Locais de pagamento",
            label: "Locais de pagamento",
          },
          {
            value: "Armazéns",
            label: "Armazéns",
          },
          {
            value: "Cofre",
            label: "Cofre",
          },
          {
            value: "Ilhas de abastecimento",
            label: "Ilhas de abastecimento",
          },
          {
            value: "Área comercial da loja",
            label: "Área comercial da loja",
          },
          {
            value: "Parque de estacionamento ",
            label: "Parque de estacionamento ",
          },
          {
            value: "Zonas internas de circulação ",
            label: "Zonas internas de circulação ",
          },
          {
            value: "Área de lavagem de serviço automóvel ",
            label: "Área de lavagem de serviço automóvel ",
          },
        ],
        Hotelaria: [
          {
            value: "Receção",
            label: "Receção",
          },
          {
            value: "Garagens",
            label: "Garagens",
          },
          {
            value: "Pontos de acesso a partir do exterior ",
            label: "Pontos de acesso a partir do exterior ",
          },
          {
            value: "Acesso a elevadores ",
            label: "Acesso a elevadores ",
          },
          {
            value: "Entrada e/ou caixa do bar ",
            label: "Entrada e/ou caixa do bar ",
          },
          {
            value: "Entrada e/ou caixa do restaurante ",
            label: "Entrada e/ou caixa do restaurante ",
          },
          {
            value: "Parque de estacionamento exterior ",
            label: "Parque de estacionamento exterior ",
          },
          {
            value: "Área de cofre",
            label: "Área de cofre",
          },
          {
            value: "Hall de escadas ",
            label: "Hall de escadas ",
          },
          {
            value: "Zonas comerciais ",
            label: " Zonas comerciais ",
          },
          {
            value: "Locais de circulação ",
            label: "Locais de circulação ",
          },
        ],
        "Instalações empresariais industriais e de serviços": [
          {
            value: "Receção",
            label: "Receção",
          },
          {
            value: "Zonas internas de circulação ",
            label: "Zonas internas de circulação ",
          },
          {
            value: "Pontos de acesso a partir do exterior ",
            label: "Pontos de acesso a partir do exterior ",
          },
          {
            value: "Parque de estacionamento",
            label: "Parque de estacionamento",
          },
          {
            value: "Zonas e balcões de atendimento ",
            label: "Zonas e balcões de atendimento ",
          },
          {
            value: "Oficinas",
            label: "Oficinas",
          },
          {
            value: "Acesso a elevadores ",
            label: "Acesso a elevadores ",
          },
          {
            value: "Armazém",
            label: "Armazém",
          },
          {
            value: "Máquinas de Vending ",
            label: "Máquinas de Vending ",
          },
        ],
        "Instituiçoes Financeiras": [
          {
            value: "Zonas internas de circulação ",
            label: "Zonas internas de circulação ",
          },
          {
            value: "Pontos de acesso a partir do exterior ",
            label: "Pontos de acesso a partir do exterior ",
          },
          {
            value: "Parque de estacionamento",
            label: "Parque de estacionamento",
          },
          {
            value: "Área de cofre ",
            label: "Área de cofre ",
          },
          {
            value: "Zonas técnicas ",
            label: "Zonas técnicas ",
          },
          {
            value: "Zona de ATM's (Caixa vinte e quatro) ",
            label: "Zona de ATM's (Caixa vinte e quatro) ",
          },
          {
            value: "Locais de atendimento ao público ",
            label: "Locais de atendimento ao público ",
          },
        ],
        "Lares e outros Estabelecimentos de Apoio Social": [
          {
            value:
              "Zonas internas de circulação (excepto corredores de acesso aos quartos)  ",
            label:
              "Zonas internas de circulação (excepto corredores de acesso aos quartos) ",
          },
          {
            value: "Pontos de acesso a partir do exterior ",
            label: "Pontos de acesso a partir do exterior ",
          },
          {
            value: "Parque de estacionamento",
            label: "Parque de estacionamento",
          },
          {
            value: "Pontos de acesso interiores",
            label: "Pontos de acesso interiores",
          },
        ],
        "Locais de Culto": [
          {
            value: "Pontos de acesso a partir do exterior ",
            label: "Pontos de acesso a partir do exterior ",
          },
          {
            value: "Pontos de venda de artigos religiosos ",
            label: "Pontos de venda de artigos religiosos ",
          },
          {
            value: "Sala de Cofres",
            label: "Sala de Cofres",
          },
        ],
        "Ourivesarias,Joalharias e Relojoarias": [
          {
            value: "Pontos de acesso a partir do exterior ",
            label: "Pontos de acesso a partir do exterior ",
          },
          {
            value: "Locais de atendimento ao público ",
            label: "Locais de atendimento ao público ",
          },
          {
            value: "Armazéns",
            label: "Armazéns",
          },
          {
            value: "Montras",
            label: "Montras",
          },
          {
            value: "Zonas da caixa ",
            label: "Zonas da caixa ",
          },
          {
            value: "Área do Cofre ",
            label: "Área do Cofre ",
          },
          {
            value: "Balcão",
            label: "Balcão",
          },
          {
            value: "Zonas de exposição de artigos ",
            label: "Zonas de exposição de artigos ",
          },
          {
            value: "Oficinas",
            label: "Oficinas",
          },
        ],
        "Parques de Estacionamento": [
          {
            value: "Pontos de acesso a partir do exterior ",
            label: "Pontos de acesso a partir do exterior ",
          },
          {
            value: "Zonas internas de circulação ",
            label: "Zonas internas de circulação ",
          },
          {
            value: "Zonas da caixa ",
            label: "Zonas da caixa ",
          },
        ],
        "Recintos Espectáculos desportivos": [
          {
            value: "Pontos de acesso a partir do exterior ",
            label: "Pontos de acesso a partir do exterior ",
          },
          {
            value: "Zonas internas de circulação ",
            label: "Zonas internas de circulação ",
          },
          {
            value: "Área do espectáculo desportivo ",
            label: "Área do espectáculo desportivo ",
          },
          {
            value: "Zonas Comerciais",
            label: "Zonas Comerciais",
          },
          {
            value: "Anel ou perímetro de segurança",
            label: "Anel ou perímetro de segurança",
          },
          {
            value: "Zonas de pagamento",
            label: "Zonas de pagamento",
          },
          {
            value: "Locais de atendimento ao público ",
            label: "Locais de atendimento ao público ",
          },
          {
            value: "Parque de Estacionamento ",
            label: "Parque de Estacionamento ",
          },
        ],
        "Residências Moradias Unifamiliares": [
          {
            value: "Áreas da via pública",
            label: "Áreas da via pública",
          },
          {
            value: "Áreas de propriedades de terceiros",
            label: "Áreas de propriedades de terceiros",
          },
          {
            value: "Áreas de Trabalhadores",
            label: "Áreas de Trabalhadores",
          },
        ],
        Restauração: [
          {
            value: "Pontos de acesso a partir do exterior",
            label: "Pontos de acesso a partir do exterior",
          },
          {
            value: "Zonas de exposição de produtos ",
            label: "Zonas de exposição de produtos ",
          },
          {
            value: "Zonas da caixa ",
            label: "Zonas da caixa ",
          },
          {
            value: "Zonas técnicas e frigoríficas ",
            label: "Zonas técnicas e frigoríficas ",
          },
          {
            value: "Zonas de Fornos ",
            label: "Zonas de Fornos ",
          },
          {
            value: "Área do Cofre",
            label: "Área do Cofre",
          },
          {
            value: "Armazém/Economato ",
            label: "Armazém/Economato ",
          },
          {
            value: "Take-away exterior ",
            label: "Take-away exterior ",
          },
          {
            value: "Parques de estacionamento ",
            label: "Parques de estacionamento ",
          },
        ],
        Sucateiras: [
          {
            value: "Zonas internas de circulação ",
            label: "Zonas internas de circulação ",
          },
          {
            value: "Pontos de acesso a partir do exterior",
            label: "Pontos de acesso a partir do exterior",
          },
          {
            value: "Parques de estacionamento ",
            label: "Parques de estacionamento ",
          },
          {
            value: "Armazéns",
            label: "Armazéns",
          },
          {
            value: "Parque de resíduos ",
            label: "Parque de resíduos ",
          },
          {
            value: "Receção",
            label: "Receção",
          },
          {
            value: "Zona de Balança/Báscula ",
            label: "Zona de Balança/Báscula ",
          },
        ],
      },
      /** *********************ILHAS E CONCELHOS ************************************** */
      ilha: null, 
      ilhaResp: null,
      ilhaMorInst: null,
      ilhaServExt: null,
      ilhaDirAcess: null,
      concelho: null,
      concelhoMorInst: null,
      concelhoServExt: null,
      concelhoDirAcess: null,
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

      ilhas: [
            { "value": "Santo Antão", "label": "Santo Antão" },
            { "value": "São Vicente", "label": "São Vicente" },
            { "value": "São Nicolau", "label": "São Nicolau" },
            { "value": "Sal", "label": "Sal" },
            { "value": "Boa Vista", "label": "Boa Vista" },
            { "value": "Maio", "label": "Maio" },
            { "value": "Santiago", "label": "Santiago" },
            { "value": "Fogo", "label": "Fogo" },
            { "value": "Brava", "label": "Brava" }
          ],

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
          tipoNotificacoes: [
            { "value": "1ª Notificação", "label": "1ª Notificação" },
            { "value": "Alteração", "label": "Alteração" },
            { "value": "Substituição da Notificação não autorizada", 
            "label": "Substituição da Notificação não autorizada" }
          ],
     
      /** *********************************************************** */
      nome_denominacao:"",
      nome_comercial:"",
      tipo_notificacao:"",
      finalidade_cctv:"",
      tipo_pessoa:"",
      atividade_desenvolvida:"",
      numero_nif:"",
      rua_responsavel_tratamento:"",
      local_responsavel_tratamento:"",
      telefone_responsavel_tratamento:"",
      email_responsavel_tratamento:"",
      pais_responsavel_tratamento:"",
      nome_representante_instalacao:"",
      email_pessoa_representante_instalacao:"",
      contato_representante_instalacao:"",
      rua_representante_instalacao:"",
      caixapostal_representante_instalacao:"",
      local_representante_instalacao:"",
      nome_pessoa_contato_representante_instalacao:"",
      ilha_responsavel_tratamento:"",
      concelho_responsavel_tratamento:"",
      caixapostal_responsavel_tratamento:"",
      entidade_processamento_informacao:"",
      rua_processamento_informacao:"",
      caixapostal_processamento_informacao:"",
      local_processamento_informacao:"",
      ilha_processamento_informacao:"",
      concelho_processamento_informacao:"",
      numero_camaras:"",
      zonas_abrangidas:"", 
      local_transmissao_imagens:"",
      quem_tem_acesso_imagens:"",
      outraszonas_abrangidas:"",
      rua_direito_acesso:"",
      caixapostal_direito_acesso:"",
      local_direito_acesso:"", 
      email_direito_acesso:"",
      contato_direito_acesso:"",
      ilha_direito_acesso:"",
      concelho_direito_acesso:"",
      forma_direito_acesso:"",
      outraforma_direito_acesso:"",
      medidas_fisicas_seguranca:"",
      medidas_logicas_seguranca:"",
      parecer_representante_trabalhadores:"",

    };
  },
  methods: {

    async onSubmit(/*values*/) {
      const datas = {

           tipo_notificacao: this.tipoNotificacao,
           finalidade_cctv: this.finalidade_cctv,
           tipo_cctv: this.tipoVideovigilancia,
           tipo_pessoa: this.tipoPessoa,
           nome_denominacao: this.nome_denominacao,
           nome_comercial: this.nome_comercial,
           atividade_desenvolvida: this.atividadeDesenvolvida,
           numero_nif: this.numero_nif,
           rua_responsavel_tratamento: this.rua_responsavel_tratamento,
           local_responsavel_tratamento: this.local_responsavel_tratamento,
           ilha_responsavel_tratamento: this.ilhaResp,
           concelho_responsavel_tratamento: this.concelhoResp,
           caixapostal_responsavel_tratamento: this.caixapostal_responsavel_tratamento,
           telefone_responsavel_tratamento: this.telefone_responsavel_tratamento,
           email_responsavel_tratamento: this.email_responsavel_tratamento,
           pais_responsavel_tratamento: this.pais_responsavel_tratamento,
           nome_representante_instalacao: this.nome_representante_instalacao,
           rua_representante_instalacao: this.rua_representante_instalacao,
           caixapostal_representante_instalacao: this.caixapostal_representante_instalacao,
           local_representante_instalacao: this.local_representante_instalacao,
           ilha_representante_instalacao: this.ilhaMorInst,
           concelho_representante_instalacao: this.concelhoMorInst,
           nome_pessoa_contato_representante_instalacao: this.nome_pessoa_contato_representante_instalacao,
           email_pessoa_representante_instalacao: this.email_pessoa_representante_instalacao,
           contato_representante_instalacao: this.contato_representante_instalacao,
           entidade_processamento_informacao: this.entidade_processamento_informacao,
           rua_processamento_informacao: this.rua_processamento_informacao,
           caixapostal_processamento_informacao: this.caixapostal_processamento_informacao,
           local_processamento_informacao: this.local_processamento_informacao,
           ilha_processamento_informacao: this.ilhaServExt,
           concelho_processamento_informacao: this.concelhoServExt, 
           numero_camaras: this.numero_camaras,
           zonas_abrangidas: this.zona, 
           local_transmissao_imagens: this.local_transmissao_imagens,
           quem_tem_acesso_imagens: this.quem_tem_acesso_imagens,
           outraszonas_abrangidas: this.outraszonas_abrangidas,
           rua_direito_acesso: this.rua_direito_acesso,
           caixapostal_direito_acesso: this.caixapostal_direito_acesso,
           local_direito_acesso: this.local_direito_acesso,
           ilha_direito_acesso: this.ilhaDirAcess,
           concelho_direito_acesso: this.concelhoDirAcess,
           email_direito_acesso: this.email_direito_acesso,
           contato_direito_acesso: this.contato_direito_acesso,
           forma_direito_acesso: this.forma_direito_acesso,
           outraforma_direito_acesso: this.outraforma_direito_acesso,
           medidas_fisicas_seguranca: this.medidas_fisicas_seguranca,
           medidas_logicas_seguranca: this.medidas_logicas_seguranca,
           parecer_representante_trabalhadores: this.parecer_representante_trabalhadores,
 
      };
       
  //SUBMIT FORM WITH AXIOS
    try {  
      await axios.post(`${API_ENDPOINT}/api/videovigilancia/create`, datas, { 

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
    validateNumber(value) {
      // if the field is empty
      if (!value) {
        return "Campo obrigatório!";
      }
      // if the field is not a valid number
      const regex = /[0-9]/;
      if (!regex.test(value)) {
        return "Carater inválido, precisa ser um número!";
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
    changeServico() {
      this.checkServico = !this.checkServico;
    },
    changeTempoReal() {
      this.checkTempoReal = !this.checkTempoReal;
    },
    changeTranssmisao() {
      this.checkTransmissao = !this.checkTransmissao;
    },
    changeDireitoAcesso() {
      this.checkDireitoAcesso = !this.checkDireitoAcesso;
    },
    changeMorada() {
      this.checkMorada = !this.checkMorada;
      this.checkMorada1 = !this.checkMorada1;
    },
    changeRepTrab() {
      this.checkRepTrab = !this.checkRepTrab;
    },
  },
 /* mounted() {
    this.dadosBackend();
  },*/
  watch: {
    categoria() {
      this.finalidd = null;
    },
    tipoVideovigilancia() {
      this.zona = null;
    },
  },
};
</script>

<style>
.cctv {
  font-family: "Times New Roman", Times, serif;
  /*padding-top: 110px;*/
}
.container {
  font-family: "Times New Roman", Times, serif;
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
@media (min-width: 1024px) {
  .section-title p {
    width: 50%;
  }
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
  padding: 10px;
  margin-top: 10px;
  padding-top: 20px;
}
.col,
.row {
  font-family: "Times New Roman", Times, serif;
}
input,
label,
textarea {
  font-family: "Times New Roman", Times, serif;
}
input {
  margin-bottom: 10px;
}
option:hover {
  background-color: #061536;
}
.form-check-input:checked {
  background-color: #061536;
}
.form-check-input:checked + label {
  color: #061536;
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
#labelleft {
  text-align: left;
}
#divloco {
  margin-top: 10px;
}

.icon-box {
  background-color: white;
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
</style>
